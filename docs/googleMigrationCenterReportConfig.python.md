# `googleMigrationCenterReportConfig` Submodule <a name="`googleMigrationCenterReportConfig` Submodule" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMigrationCenterReportConfig <a name="GoogleMigrationCenterReportConfig" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config google_migration_center_report_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_report_config

googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  group_preferenceset_assignments: IResolvable | typing.List[GoogleMigrationCenterReportConfigGroupPreferencesetAssignments],
  location: str,
  report_config_id: str,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleMigrationCenterReportConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.groupPreferencesetAssignments">group_preferenceset_assignments</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a>]</code> | group_preferenceset_assignments block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.reportConfigId">report_config_id</a></code> | <code>str</code> | User specified ID for the report config. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | Free-text description. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-friendly display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#id GoogleMigrationCenterReportConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#project GoogleMigrationCenterReportConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts">GoogleMigrationCenterReportConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `group_preferenceset_assignments`<sup>Required</sup> <a name="group_preferenceset_assignments" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.groupPreferencesetAssignments"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a>]

group_preferenceset_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#group_preferenceset_assignments GoogleMigrationCenterReportConfig#group_preferenceset_assignments}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#location GoogleMigrationCenterReportConfig#location}

---

##### `report_config_id`<sup>Required</sup> <a name="report_config_id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.reportConfigId"></a>

- *Type:* str

User specified ID for the report config.

It will become the last component
of the report config name. The ID must be unique within the project, must
conform with RFC-1034, is restricted to lower-cased letters, and has a
maximum length of 63 characters. The ID must match the regular expression:
[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#report_config_id GoogleMigrationCenterReportConfig#report_config_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#deletion_policy GoogleMigrationCenterReportConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.description"></a>

- *Type:* str

Free-text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#description GoogleMigrationCenterReportConfig#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.displayName"></a>

- *Type:* str

User-friendly display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#display_name GoogleMigrationCenterReportConfig#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#id GoogleMigrationCenterReportConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#project GoogleMigrationCenterReportConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts">GoogleMigrationCenterReportConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#timeouts GoogleMigrationCenterReportConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.putGroupPreferencesetAssignments">put_group_preferenceset_assignments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_group_preferenceset_assignments` <a name="put_group_preferenceset_assignments" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.putGroupPreferencesetAssignments"></a>

```python
def put_group_preferenceset_assignments(
  value: IResolvable | typing.List[GoogleMigrationCenterReportConfigGroupPreferencesetAssignments]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.putGroupPreferencesetAssignments.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#create GoogleMigrationCenterReportConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#delete GoogleMigrationCenterReportConfig#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleMigrationCenterReportConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_migration_center_report_config

googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_migration_center_report_config

googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_migration_center_report_config

googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_migration_center_report_config

googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleMigrationCenterReportConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleMigrationCenterReportConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleMigrationCenterReportConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleMigrationCenterReportConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.groupPreferencesetAssignments">group_preferenceset_assignments</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList">GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference">GoogleMigrationCenterReportConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.groupPreferencesetAssignmentsInput">group_preferenceset_assignments_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.reportConfigIdInput">report_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts">GoogleMigrationCenterReportConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.reportConfigId">report_config_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `group_preferenceset_assignments`<sup>Required</sup> <a name="group_preferenceset_assignments" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.groupPreferencesetAssignments"></a>

```python
group_preferenceset_assignments: GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList">GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.timeouts"></a>

```python
timeouts: GoogleMigrationCenterReportConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference">GoogleMigrationCenterReportConfigTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `group_preferenceset_assignments_input`<sup>Optional</sup> <a name="group_preferenceset_assignments_input" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.groupPreferencesetAssignmentsInput"></a>

```python
group_preferenceset_assignments_input: IResolvable | typing.List[GoogleMigrationCenterReportConfigGroupPreferencesetAssignments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `report_config_id_input`<sup>Optional</sup> <a name="report_config_id_input" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.reportConfigIdInput"></a>

```python
report_config_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleMigrationCenterReportConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts">GoogleMigrationCenterReportConfigTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `report_config_id`<sup>Required</sup> <a name="report_config_id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.reportConfigId"></a>

```python
report_config_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMigrationCenterReportConfigConfig <a name="GoogleMigrationCenterReportConfigConfig" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_report_config

googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  group_preferenceset_assignments: IResolvable | typing.List[GoogleMigrationCenterReportConfigGroupPreferencesetAssignments],
  location: str,
  report_config_id: str,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleMigrationCenterReportConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.groupPreferencesetAssignments">group_preferenceset_assignments</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a>]</code> | group_preferenceset_assignments block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.reportConfigId">report_config_id</a></code> | <code>str</code> | User specified ID for the report config. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.description">description</a></code> | <code>str</code> | Free-text description. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.displayName">display_name</a></code> | <code>str</code> | User-friendly display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#id GoogleMigrationCenterReportConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#project GoogleMigrationCenterReportConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts">GoogleMigrationCenterReportConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `group_preferenceset_assignments`<sup>Required</sup> <a name="group_preferenceset_assignments" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.groupPreferencesetAssignments"></a>

```python
group_preferenceset_assignments: IResolvable | typing.List[GoogleMigrationCenterReportConfigGroupPreferencesetAssignments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a>]

group_preferenceset_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#group_preferenceset_assignments GoogleMigrationCenterReportConfig#group_preferenceset_assignments}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#location GoogleMigrationCenterReportConfig#location}

---

##### `report_config_id`<sup>Required</sup> <a name="report_config_id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.reportConfigId"></a>

```python
report_config_id: str
```

- *Type:* str

User specified ID for the report config.

It will become the last component
of the report config name. The ID must be unique within the project, must
conform with RFC-1034, is restricted to lower-cased letters, and has a
maximum length of 63 characters. The ID must match the regular expression:
[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#report_config_id GoogleMigrationCenterReportConfig#report_config_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#deletion_policy GoogleMigrationCenterReportConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Free-text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#description GoogleMigrationCenterReportConfig#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-friendly display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#display_name GoogleMigrationCenterReportConfig#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#id GoogleMigrationCenterReportConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#project GoogleMigrationCenterReportConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleMigrationCenterReportConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts">GoogleMigrationCenterReportConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#timeouts GoogleMigrationCenterReportConfig#timeouts}

---

### GoogleMigrationCenterReportConfigGroupPreferencesetAssignments <a name="GoogleMigrationCenterReportConfigGroupPreferencesetAssignments" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_report_config

googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments(
  group: str,
  preference_set: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments.property.group">group</a></code> | <code>str</code> | Name of the group. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments.property.preferenceSet">preference_set</a></code> | <code>str</code> | Name of the Preference Set. |

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments.property.group"></a>

```python
group: str
```

- *Type:* str

Name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#group GoogleMigrationCenterReportConfig#group}

---

##### `preference_set`<sup>Required</sup> <a name="preference_set" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments.property.preferenceSet"></a>

```python
preference_set: str
```

- *Type:* str

Name of the Preference Set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#preference_set GoogleMigrationCenterReportConfig#preference_set}

---

### GoogleMigrationCenterReportConfigTimeouts <a name="GoogleMigrationCenterReportConfigTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_report_config

googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#create GoogleMigrationCenterReportConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#delete GoogleMigrationCenterReportConfig#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#create GoogleMigrationCenterReportConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_report_config#delete GoogleMigrationCenterReportConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList <a name="GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_report_config

googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleMigrationCenterReportConfigGroupPreferencesetAssignments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a>]

---


### GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference <a name="GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_report_config

googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.preferenceSetInput">preference_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.preferenceSet">preference_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `preference_set_input`<sup>Optional</sup> <a name="preference_set_input" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.preferenceSetInput"></a>

```python
preference_set_input: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `preference_set`<sup>Required</sup> <a name="preference_set" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.preferenceSet"></a>

```python
preference_set: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleMigrationCenterReportConfigGroupPreferencesetAssignments
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigGroupPreferencesetAssignments">GoogleMigrationCenterReportConfigGroupPreferencesetAssignments</a>

---


### GoogleMigrationCenterReportConfigTimeoutsOutputReference <a name="GoogleMigrationCenterReportConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_report_config

googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts">GoogleMigrationCenterReportConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleMigrationCenterReportConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMigrationCenterReportConfig.GoogleMigrationCenterReportConfigTimeouts">GoogleMigrationCenterReportConfigTimeouts</a>

---



