# `googleMigrationCenterSettings` Submodule <a name="`googleMigrationCenterSettings` Submodule" id="@cdktn/provider-google-beta.googleMigrationCenterSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMigrationCenterSettings <a name="GoogleMigrationCenterSettings" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings google_migration_center_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_settings

googleMigrationCenterSettings.GoogleMigrationCenterSettings(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  deletion_policy: str = None,
  disable_cloud_logging: bool | IResolvable = None,
  id: str = None,
  preference_set: str = None,
  project: str = None,
  timeouts: GoogleMigrationCenterSettingsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.disableCloudLogging">disable_cloud_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | Disable Cloud Logging for the Migration Center API. Users are billed for the logs. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#id GoogleMigrationCenterSettings#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.preferenceSet">preference_set</a></code> | <code>str</code> | The preference set used by default for a project. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#project GoogleMigrationCenterSettings#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeouts">GoogleMigrationCenterSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#location GoogleMigrationCenterSettings#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#deletion_policy GoogleMigrationCenterSettings#deletion_policy}

---

##### `disable_cloud_logging`<sup>Optional</sup> <a name="disable_cloud_logging" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.disableCloudLogging"></a>

- *Type:* bool | cdktn.IResolvable

Disable Cloud Logging for the Migration Center API. Users are billed for the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#disable_cloud_logging GoogleMigrationCenterSettings#disable_cloud_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#id GoogleMigrationCenterSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preference_set`<sup>Optional</sup> <a name="preference_set" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.preferenceSet"></a>

- *Type:* str

The preference set used by default for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#preference_set GoogleMigrationCenterSettings#preference_set}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#project GoogleMigrationCenterSettings#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeouts">GoogleMigrationCenterSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#timeouts GoogleMigrationCenterSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.resetDisableCloudLogging">reset_disable_cloud_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.resetPreferenceSet">reset_preference_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#create GoogleMigrationCenterSettings#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#delete GoogleMigrationCenterSettings#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#update GoogleMigrationCenterSettings#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_disable_cloud_logging` <a name="reset_disable_cloud_logging" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.resetDisableCloudLogging"></a>

```python
def reset_disable_cloud_logging() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_preference_set` <a name="reset_preference_set" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.resetPreferenceSet"></a>

```python
def reset_preference_set() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleMigrationCenterSettings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_migration_center_settings

googleMigrationCenterSettings.GoogleMigrationCenterSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_migration_center_settings

googleMigrationCenterSettings.GoogleMigrationCenterSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_migration_center_settings

googleMigrationCenterSettings.GoogleMigrationCenterSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_migration_center_settings

googleMigrationCenterSettings.GoogleMigrationCenterSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleMigrationCenterSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleMigrationCenterSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleMigrationCenterSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleMigrationCenterSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference">GoogleMigrationCenterSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.disableCloudLoggingInput">disable_cloud_logging_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.preferenceSetInput">preference_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeouts">GoogleMigrationCenterSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.disableCloudLogging">disable_cloud_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.preferenceSet">preference_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.timeouts"></a>

```python
timeouts: GoogleMigrationCenterSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference">GoogleMigrationCenterSettingsTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `disable_cloud_logging_input`<sup>Optional</sup> <a name="disable_cloud_logging_input" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.disableCloudLoggingInput"></a>

```python
disable_cloud_logging_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `preference_set_input`<sup>Optional</sup> <a name="preference_set_input" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.preferenceSetInput"></a>

```python
preference_set_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleMigrationCenterSettingsTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeouts">GoogleMigrationCenterSettingsTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `disable_cloud_logging`<sup>Required</sup> <a name="disable_cloud_logging" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.disableCloudLogging"></a>

```python
disable_cloud_logging: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `preference_set`<sup>Required</sup> <a name="preference_set" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.preferenceSet"></a>

```python
preference_set: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMigrationCenterSettingsConfig <a name="GoogleMigrationCenterSettingsConfig" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_settings

googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  deletion_policy: str = None,
  disable_cloud_logging: bool | IResolvable = None,
  id: str = None,
  preference_set: str = None,
  project: str = None,
  timeouts: GoogleMigrationCenterSettingsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.disableCloudLogging">disable_cloud_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | Disable Cloud Logging for the Migration Center API. Users are billed for the logs. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#id GoogleMigrationCenterSettings#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.preferenceSet">preference_set</a></code> | <code>str</code> | The preference set used by default for a project. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#project GoogleMigrationCenterSettings#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeouts">GoogleMigrationCenterSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#location GoogleMigrationCenterSettings#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#deletion_policy GoogleMigrationCenterSettings#deletion_policy}

---

##### `disable_cloud_logging`<sup>Optional</sup> <a name="disable_cloud_logging" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.disableCloudLogging"></a>

```python
disable_cloud_logging: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disable Cloud Logging for the Migration Center API. Users are billed for the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#disable_cloud_logging GoogleMigrationCenterSettings#disable_cloud_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#id GoogleMigrationCenterSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preference_set`<sup>Optional</sup> <a name="preference_set" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.preferenceSet"></a>

```python
preference_set: str
```

- *Type:* str

The preference set used by default for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#preference_set GoogleMigrationCenterSettings#preference_set}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#project GoogleMigrationCenterSettings#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsConfig.property.timeouts"></a>

```python
timeouts: GoogleMigrationCenterSettingsTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeouts">GoogleMigrationCenterSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#timeouts GoogleMigrationCenterSettings#timeouts}

---

### GoogleMigrationCenterSettingsTimeouts <a name="GoogleMigrationCenterSettingsTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_settings

googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#create GoogleMigrationCenterSettings#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#delete GoogleMigrationCenterSettings#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#update GoogleMigrationCenterSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#create GoogleMigrationCenterSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#delete GoogleMigrationCenterSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_settings#update GoogleMigrationCenterSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMigrationCenterSettingsTimeoutsOutputReference <a name="GoogleMigrationCenterSettingsTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_settings

googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeouts">GoogleMigrationCenterSettingsTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleMigrationCenterSettingsTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMigrationCenterSettings.GoogleMigrationCenterSettingsTimeouts">GoogleMigrationCenterSettingsTimeouts</a>

---



