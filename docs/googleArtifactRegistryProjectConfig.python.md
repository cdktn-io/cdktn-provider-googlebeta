# `googleArtifactRegistryProjectConfig` Submodule <a name="`googleArtifactRegistryProjectConfig` Submodule" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleArtifactRegistryProjectConfig <a name="GoogleArtifactRegistryProjectConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config google_artifact_registry_project_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_project_config

googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  location: str = None,
  platform_logs_config: GoogleArtifactRegistryProjectConfigPlatformLogsConfig = None,
  project: str = None,
  timeouts: GoogleArtifactRegistryProjectConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#id GoogleArtifactRegistryProjectConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The name of the location this config is located in. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.platformLogsConfig">platform_logs_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | platform_logs_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#project GoogleArtifactRegistryProjectConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#id GoogleArtifactRegistryProjectConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.location"></a>

- *Type:* str

The name of the location this config is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#location GoogleArtifactRegistryProjectConfig#location}

---

##### `platform_logs_config`<sup>Optional</sup> <a name="platform_logs_config" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.platformLogsConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a>

platform_logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#platform_logs_config GoogleArtifactRegistryProjectConfig#platform_logs_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#project GoogleArtifactRegistryProjectConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#timeouts GoogleArtifactRegistryProjectConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putPlatformLogsConfig">put_platform_logs_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetPlatformLogsConfig">reset_platform_logs_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_platform_logs_config` <a name="put_platform_logs_config" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putPlatformLogsConfig"></a>

```python
def put_platform_logs_config(
  logging_state: str = None,
  severity_level: str = None
) -> None
```

###### `logging_state`<sup>Optional</sup> <a name="logging_state" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putPlatformLogsConfig.parameter.loggingState"></a>

- *Type:* str

The state of the platform logs: enabled or disabled. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#logging_state GoogleArtifactRegistryProjectConfig#logging_state}

---

###### `severity_level`<sup>Optional</sup> <a name="severity_level" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putPlatformLogsConfig.parameter.severityLevel"></a>

- *Type:* str

The severity level for the logs.

Logs will be generated if their
severity level is >= than the value of the severity level mentioned here. Possible values: ["DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#severity_level GoogleArtifactRegistryProjectConfig#severity_level}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#create GoogleArtifactRegistryProjectConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#delete GoogleArtifactRegistryProjectConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#update GoogleArtifactRegistryProjectConfig#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_platform_logs_config` <a name="reset_platform_logs_config" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetPlatformLogsConfig"></a>

```python
def reset_platform_logs_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleArtifactRegistryProjectConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_project_config

googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_project_config

googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_project_config

googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_project_config

googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleArtifactRegistryProjectConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleArtifactRegistryProjectConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleArtifactRegistryProjectConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleArtifactRegistryProjectConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.platformLogsConfig">platform_logs_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference">GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference">GoogleArtifactRegistryProjectConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.platformLogsConfigInput">platform_logs_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `platform_logs_config`<sup>Required</sup> <a name="platform_logs_config" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.platformLogsConfig"></a>

```python
platform_logs_config: GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference">GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.timeouts"></a>

```python
timeouts: GoogleArtifactRegistryProjectConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference">GoogleArtifactRegistryProjectConfigTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `platform_logs_config_input`<sup>Optional</sup> <a name="platform_logs_config_input" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.platformLogsConfigInput"></a>

```python
platform_logs_config_input: GoogleArtifactRegistryProjectConfigPlatformLogsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleArtifactRegistryProjectConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleArtifactRegistryProjectConfigConfig <a name="GoogleArtifactRegistryProjectConfigConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_project_config

googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  location: str = None,
  platform_logs_config: GoogleArtifactRegistryProjectConfigPlatformLogsConfig = None,
  project: str = None,
  timeouts: GoogleArtifactRegistryProjectConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#id GoogleArtifactRegistryProjectConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.location">location</a></code> | <code>str</code> | The name of the location this config is located in. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.platformLogsConfig">platform_logs_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | platform_logs_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#project GoogleArtifactRegistryProjectConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#id GoogleArtifactRegistryProjectConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The name of the location this config is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#location GoogleArtifactRegistryProjectConfig#location}

---

##### `platform_logs_config`<sup>Optional</sup> <a name="platform_logs_config" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.platformLogsConfig"></a>

```python
platform_logs_config: GoogleArtifactRegistryProjectConfigPlatformLogsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a>

platform_logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#platform_logs_config GoogleArtifactRegistryProjectConfig#platform_logs_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#project GoogleArtifactRegistryProjectConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleArtifactRegistryProjectConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#timeouts GoogleArtifactRegistryProjectConfig#timeouts}

---

### GoogleArtifactRegistryProjectConfigPlatformLogsConfig <a name="GoogleArtifactRegistryProjectConfigPlatformLogsConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_project_config

googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig(
  logging_state: str = None,
  severity_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.property.loggingState">logging_state</a></code> | <code>str</code> | The state of the platform logs: enabled or disabled. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.property.severityLevel">severity_level</a></code> | <code>str</code> | The severity level for the logs. |

---

##### `logging_state`<sup>Optional</sup> <a name="logging_state" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.property.loggingState"></a>

```python
logging_state: str
```

- *Type:* str

The state of the platform logs: enabled or disabled. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#logging_state GoogleArtifactRegistryProjectConfig#logging_state}

---

##### `severity_level`<sup>Optional</sup> <a name="severity_level" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.property.severityLevel"></a>

```python
severity_level: str
```

- *Type:* str

The severity level for the logs.

Logs will be generated if their
severity level is >= than the value of the severity level mentioned here. Possible values: ["DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#severity_level GoogleArtifactRegistryProjectConfig#severity_level}

---

### GoogleArtifactRegistryProjectConfigTimeouts <a name="GoogleArtifactRegistryProjectConfigTimeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_project_config

googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#create GoogleArtifactRegistryProjectConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#delete GoogleArtifactRegistryProjectConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#update GoogleArtifactRegistryProjectConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#create GoogleArtifactRegistryProjectConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#delete GoogleArtifactRegistryProjectConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#update GoogleArtifactRegistryProjectConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference <a name="GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_project_config

googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetLoggingState">reset_logging_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetSeverityLevel">reset_severity_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_logging_state` <a name="reset_logging_state" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetLoggingState"></a>

```python
def reset_logging_state() -> None
```

##### `reset_severity_level` <a name="reset_severity_level" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetSeverityLevel"></a>

```python
def reset_severity_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingStateInput">logging_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevelInput">severity_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingState">logging_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevel">severity_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_state_input`<sup>Optional</sup> <a name="logging_state_input" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingStateInput"></a>

```python
logging_state_input: str
```

- *Type:* str

---

##### `severity_level_input`<sup>Optional</sup> <a name="severity_level_input" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevelInput"></a>

```python
severity_level_input: str
```

- *Type:* str

---

##### `logging_state`<sup>Required</sup> <a name="logging_state" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingState"></a>

```python
logging_state: str
```

- *Type:* str

---

##### `severity_level`<sup>Required</sup> <a name="severity_level" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevel"></a>

```python
severity_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryProjectConfigPlatformLogsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a>

---


### GoogleArtifactRegistryProjectConfigTimeoutsOutputReference <a name="GoogleArtifactRegistryProjectConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_project_config

googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleArtifactRegistryProjectConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a>

---



