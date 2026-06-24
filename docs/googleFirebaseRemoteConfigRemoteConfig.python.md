# `googleFirebaseRemoteConfigRemoteConfig` Submodule <a name="`googleFirebaseRemoteConfigRemoteConfig` Submodule" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseRemoteConfigRemoteConfig <a name="GoogleFirebaseRemoteConfigRemoteConfig" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config google_firebase_remote_config_remote_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  conditions: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigConditions] = None,
  id: str = None,
  parameter_groups: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameterGroups] = None,
  parameters: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameters] = None,
  project: str = None,
  timeouts: GoogleFirebaseRemoteConfigRemoteConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#id GoogleFirebaseRemoteConfigRemoteConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.parameterGroups">parameter_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>]</code> | parameter_groups block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>]</code> | parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#project GoogleFirebaseRemoteConfigRemoteConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.conditions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#conditions GoogleFirebaseRemoteConfigRemoteConfig#conditions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#id GoogleFirebaseRemoteConfigRemoteConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter_groups`<sup>Optional</sup> <a name="parameter_groups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.parameterGroups"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>]

parameter_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameter_groups GoogleFirebaseRemoteConfigRemoteConfig#parameter_groups}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.parameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameters GoogleFirebaseRemoteConfigRemoteConfig#parameters}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#project GoogleFirebaseRemoteConfigRemoteConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#timeouts GoogleFirebaseRemoteConfigRemoteConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameterGroups">put_parameter_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetParameterGroups">reset_parameter_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>]

---

##### `put_parameter_groups` <a name="put_parameter_groups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameterGroups"></a>

```python
def put_parameter_groups(
  value: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameterGroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameterGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>]

---

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#create GoogleFirebaseRemoteConfigRemoteConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#delete GoogleFirebaseRemoteConfigRemoteConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#update GoogleFirebaseRemoteConfigRemoteConfig#update}.

---

##### `reset_conditions` <a name="reset_conditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameter_groups` <a name="reset_parameter_groups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetParameterGroups"></a>

```python
def reset_parameter_groups() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleFirebaseRemoteConfigRemoteConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleFirebaseRemoteConfigRemoteConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleFirebaseRemoteConfigRemoteConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleFirebaseRemoteConfigRemoteConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseRemoteConfigRemoteConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList">GoogleFirebaseRemoteConfigRemoteConfigConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameterGroups">parameter_groups</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList">GoogleFirebaseRemoteConfigRemoteConfigParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference">GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.version">version</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList">GoogleFirebaseRemoteConfigRemoteConfigVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameterGroupsInput">parameter_groups_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.conditions"></a>

```python
conditions: GoogleFirebaseRemoteConfigRemoteConfigConditionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList">GoogleFirebaseRemoteConfigRemoteConfigConditionsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameter_groups`<sup>Required</sup> <a name="parameter_groups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameterGroups"></a>

```python
parameter_groups: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameters"></a>

```python
parameters: GoogleFirebaseRemoteConfigRemoteConfigParametersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList">GoogleFirebaseRemoteConfigRemoteConfigParametersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.timeouts"></a>

```python
timeouts: GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference">GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.version"></a>

```python
version: GoogleFirebaseRemoteConfigRemoteConfigVersionList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList">GoogleFirebaseRemoteConfigRemoteConfigVersionList</a>

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parameter_groups_input`<sup>Optional</sup> <a name="parameter_groups_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameterGroupsInput"></a>

```python
parameter_groups_input: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameterGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>]

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseRemoteConfigRemoteConfigConditions <a name="GoogleFirebaseRemoteConfigRemoteConfigConditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions(
  expression: str,
  name: str,
  tag_color: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.expression">expression</a></code> | <code>str</code> | The logic of this condition. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.name">name</a></code> | <code>str</code> | A non-empty and unique name of this condition. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.tagColor">tag_color</a></code> | <code>str</code> | The color associated with this condition for display purposes in the Firebase Console. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.expression"></a>

```python
expression: str
```

- *Type:* str

The logic of this condition.

See the documentation regarding
[Condition
Expressions](https://firebase.google.com/docs/remote-config/condition-reference)
for the expected syntax of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#expression GoogleFirebaseRemoteConfigRemoteConfig#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.name"></a>

```python
name: str
```

- *Type:* str

A non-empty and unique name of this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#name GoogleFirebaseRemoteConfigRemoteConfig#name}

---

##### `tag_color`<sup>Optional</sup> <a name="tag_color" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.tagColor"></a>

```python
tag_color: str
```

- *Type:* str

The color associated with this condition for display purposes in the Firebase Console.

Not specifying this value results in the Console picking an arbitrary color to associate with the condition. Possible values: ["BLUE", "BROWN", "CYAN", "DEEP_ORANGE", "GREEN", "INDIGO", "LIME", "ORANGE", "PINK", "PURPLE", "TEAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#tag_color GoogleFirebaseRemoteConfigRemoteConfig#tag_color}

---

### GoogleFirebaseRemoteConfigRemoteConfigConfig <a name="GoogleFirebaseRemoteConfigRemoteConfigConfig" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  conditions: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigConditions] = None,
  id: str = None,
  parameter_groups: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameterGroups] = None,
  parameters: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameters] = None,
  project: str = None,
  timeouts: GoogleFirebaseRemoteConfigRemoteConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#id GoogleFirebaseRemoteConfigRemoteConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.parameterGroups">parameter_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>]</code> | parameter_groups block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>]</code> | parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#project GoogleFirebaseRemoteConfigRemoteConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.conditions"></a>

```python
conditions: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#conditions GoogleFirebaseRemoteConfigRemoteConfig#conditions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#id GoogleFirebaseRemoteConfigRemoteConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter_groups`<sup>Optional</sup> <a name="parameter_groups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.parameterGroups"></a>

```python
parameter_groups: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameterGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>]

parameter_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameter_groups GoogleFirebaseRemoteConfigRemoteConfig#parameter_groups}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.parameters"></a>

```python
parameters: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameters GoogleFirebaseRemoteConfigRemoteConfig#parameters}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#project GoogleFirebaseRemoteConfigRemoteConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleFirebaseRemoteConfigRemoteConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#timeouts GoogleFirebaseRemoteConfigRemoteConfig#timeouts}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameterGroups <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups(
  parameter_group_name: str,
  description: str = None,
  parameters: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameter_group_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_group_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.description">description</a></code> | <code>str</code> | A description for the group. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>]</code> | parameters block. |

---

##### `parameter_group_name`<sup>Required</sup> <a name="parameter_group_name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.parameterGroupName"></a>

```python
parameter_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameter_group_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the group.

Its length must be less than or equal to 256
characters. A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#description GoogleFirebaseRemoteConfigRemoteConfig#description}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.parameters"></a>

```python
parameters: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameters GoogleFirebaseRemoteConfigRemoteConfig#parameters}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters(
  parameter_name: str,
  conditional_values: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues] = None,
  default_value: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue = None,
  description: str = None,
  value_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.parameterName">parameter_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameter_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.conditionalValues">conditional_values</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>]</code> | conditional_values block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.defaultValue">default_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | default_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.description">description</a></code> | <code>str</code> | A description for this Parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.valueType">value_type</a></code> | <code>str</code> | The data type for all values of this parameter in the current version of the template. |

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameter_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_name}.

---

##### `conditional_values`<sup>Optional</sup> <a name="conditional_values" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.conditionalValues"></a>

```python
conditional_values: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>]

conditional_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#conditional_values GoogleFirebaseRemoteConfigRemoteConfig#conditional_values}

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.defaultValue"></a>

```python
default_value: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

default_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#default_value GoogleFirebaseRemoteConfigRemoteConfig#default_value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.description"></a>

```python
description: str
```

- *Type:* str

A description for this Parameter.

Its length must be less than or equal to
256 characters . A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#description GoogleFirebaseRemoteConfigRemoteConfig#description}

---

##### `value_type`<sup>Optional</sup> <a name="value_type" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

The data type for all values of this parameter in the current version of the template.

Default value: "STRING" Possible values: ["STRING", "BOOLEAN", "NUMBER", "JSON"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#value_type GoogleFirebaseRemoteConfigRemoteConfig#value_type}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues(
  condition_name: str,
  use_in_app_default: bool | IResolvable = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.conditionName">condition_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#condition_name GoogleFirebaseRemoteConfigRemoteConfig#condition_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.useInAppDefault">use_in_app_default</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.value">value</a></code> | <code>str</code> | The string value that the parameter is set to. |

---

##### `condition_name`<sup>Required</sup> <a name="condition_name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.conditionName"></a>

```python
condition_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#condition_name GoogleFirebaseRemoteConfigRemoteConfig#condition_name}.

---

##### `use_in_app_default`<sup>Optional</sup> <a name="use_in_app_default" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.useInAppDefault"></a>

```python
use_in_app_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.value"></a>

```python
value: str
```

- *Type:* str

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue(
  use_in_app_default: bool | IResolvable = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.useInAppDefault">use_in_app_default</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.value">value</a></code> | <code>str</code> | The string value that the parameter is set to. |

---

##### `use_in_app_default`<sup>Optional</sup> <a name="use_in_app_default" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.useInAppDefault"></a>

```python
use_in_app_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.value"></a>

```python
value: str
```

- *Type:* str

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameters <a name="GoogleFirebaseRemoteConfigRemoteConfigParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters(
  parameter_name: str,
  conditional_values: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues] = None,
  default_value: GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue = None,
  description: str = None,
  value_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.parameterName">parameter_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameter_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.conditionalValues">conditional_values</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>]</code> | conditional_values block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.defaultValue">default_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | default_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.description">description</a></code> | <code>str</code> | A description for this Parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.valueType">value_type</a></code> | <code>str</code> | The data type for all values of this parameter in the current version of the template. |

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameter_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_name}.

---

##### `conditional_values`<sup>Optional</sup> <a name="conditional_values" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.conditionalValues"></a>

```python
conditional_values: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>]

conditional_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#conditional_values GoogleFirebaseRemoteConfigRemoteConfig#conditional_values}

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.defaultValue"></a>

```python
default_value: GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

default_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#default_value GoogleFirebaseRemoteConfigRemoteConfig#default_value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.description"></a>

```python
description: str
```

- *Type:* str

A description for this Parameter.

Its length must be less than or equal to
256 characters . A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#description GoogleFirebaseRemoteConfigRemoteConfig#description}

---

##### `value_type`<sup>Optional</sup> <a name="value_type" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

The data type for all values of this parameter in the current version of the template.

Default value: "STRING" Possible values: ["STRING", "BOOLEAN", "NUMBER", "JSON"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#value_type GoogleFirebaseRemoteConfigRemoteConfig#value_type}

---

### GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues(
  condition_name: str,
  use_in_app_default: bool | IResolvable = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.conditionName">condition_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#condition_name GoogleFirebaseRemoteConfigRemoteConfig#condition_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.useInAppDefault">use_in_app_default</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.value">value</a></code> | <code>str</code> | The string value that the parameter is set to. |

---

##### `condition_name`<sup>Required</sup> <a name="condition_name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.conditionName"></a>

```python
condition_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#condition_name GoogleFirebaseRemoteConfigRemoteConfig#condition_name}.

---

##### `use_in_app_default`<sup>Optional</sup> <a name="use_in_app_default" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.useInAppDefault"></a>

```python
use_in_app_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.value"></a>

```python
value: str
```

- *Type:* str

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}

---

### GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue(
  use_in_app_default: bool | IResolvable = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.useInAppDefault">use_in_app_default</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.value">value</a></code> | <code>str</code> | The string value that the parameter is set to. |

---

##### `use_in_app_default`<sup>Optional</sup> <a name="use_in_app_default" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.useInAppDefault"></a>

```python
use_in_app_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.value"></a>

```python
value: str
```

- *Type:* str

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}

---

### GoogleFirebaseRemoteConfigRemoteConfigTimeouts <a name="GoogleFirebaseRemoteConfigRemoteConfigTimeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#create GoogleFirebaseRemoteConfigRemoteConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#delete GoogleFirebaseRemoteConfigRemoteConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#update GoogleFirebaseRemoteConfigRemoteConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#create GoogleFirebaseRemoteConfigRemoteConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#delete GoogleFirebaseRemoteConfigRemoteConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#update GoogleFirebaseRemoteConfigRemoteConfig#update}.

---

### GoogleFirebaseRemoteConfigRemoteConfigVersion <a name="GoogleFirebaseRemoteConfigRemoteConfigVersion" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersion.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersion()
```


### GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser()
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseRemoteConfigRemoteConfigConditionsList <a name="GoogleFirebaseRemoteConfigRemoteConfigConditionsList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>]

---


### GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resetTagColor">reset_tag_color</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tag_color` <a name="reset_tag_color" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resetTagColor"></a>

```python
def reset_tag_color() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColorInput">tag_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColor">tag_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tag_color_input`<sup>Optional</sup> <a name="tag_color_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColorInput"></a>

```python
tag_color_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tag_color`<sup>Required</sup> <a name="tag_color" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColor"></a>

```python
tag_color: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameterGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>]

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupNameInput">parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameters"></a>

```python
parameters: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `parameter_group_name_input`<sup>Optional</sup> <a name="parameter_group_name_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupNameInput"></a>

```python
parameter_group_name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `parameter_group_name`<sup>Required</sup> <a name="parameter_group_name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupName"></a>

```python
parameter_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameterGroups
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>]

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetUseInAppDefault">reset_use_in_app_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_in_app_default` <a name="reset_use_in_app_default" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetUseInAppDefault"></a>

```python
def reset_use_in_app_default() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionNameInput">condition_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefaultInput">use_in_app_default_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionName">condition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefault">use_in_app_default</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_name_input`<sup>Optional</sup> <a name="condition_name_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionNameInput"></a>

```python
condition_name_input: str
```

- *Type:* str

---

##### `use_in_app_default_input`<sup>Optional</sup> <a name="use_in_app_default_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefaultInput"></a>

```python
use_in_app_default_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `condition_name`<sup>Required</sup> <a name="condition_name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionName"></a>

```python
condition_name: str
```

- *Type:* str

---

##### `use_in_app_default`<sup>Required</sup> <a name="use_in_app_default" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefault"></a>

```python
use_in_app_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetUseInAppDefault">reset_use_in_app_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_in_app_default` <a name="reset_use_in_app_default" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetUseInAppDefault"></a>

```python
def reset_use_in_app_default() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefaultInput">use_in_app_default_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefault">use_in_app_default</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `use_in_app_default_input`<sup>Optional</sup> <a name="use_in_app_default_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefaultInput"></a>

```python
use_in_app_default_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `use_in_app_default`<sup>Required</sup> <a name="use_in_app_default" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefault"></a>

```python
use_in_app_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>]

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues">put_conditional_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue">put_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetConditionalValues">reset_conditional_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetValueType">reset_value_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditional_values` <a name="put_conditional_values" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues"></a>

```python
def put_conditional_values(
  value: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>]

---

##### `put_default_value` <a name="put_default_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue"></a>

```python
def put_default_value(
  use_in_app_default: bool | IResolvable = None,
  value: str = None
) -> None
```

###### `use_in_app_default`<sup>Optional</sup> <a name="use_in_app_default" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue.parameter.useInAppDefault"></a>

- *Type:* bool | cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* str

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}

---

##### `reset_conditional_values` <a name="reset_conditional_values" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetConditionalValues"></a>

```python
def reset_conditional_values() -> None
```

##### `reset_default_value` <a name="reset_default_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_value_type` <a name="reset_value_type" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetValueType"></a>

```python
def reset_value_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValues">conditional_values</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValue">default_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValuesInput">conditional_values_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValueInput">default_value_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterNameInput">parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditional_values`<sup>Required</sup> <a name="conditional_values" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValues"></a>

```python
conditional_values: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList</a>

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValue"></a>

```python
default_value: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference</a>

---

##### `conditional_values_input`<sup>Optional</sup> <a name="conditional_values_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValuesInput"></a>

```python
conditional_values_input: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>]

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValueInput"></a>

```python
default_value_input: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `parameter_name_input`<sup>Optional</sup> <a name="parameter_name_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterNameInput"></a>

```python
parameter_name_input: str
```

- *Type:* str

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>]

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetUseInAppDefault">reset_use_in_app_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_in_app_default` <a name="reset_use_in_app_default" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetUseInAppDefault"></a>

```python
def reset_use_in_app_default() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionNameInput">condition_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefaultInput">use_in_app_default_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionName">condition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefault">use_in_app_default</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_name_input`<sup>Optional</sup> <a name="condition_name_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionNameInput"></a>

```python
condition_name_input: str
```

- *Type:* str

---

##### `use_in_app_default_input`<sup>Optional</sup> <a name="use_in_app_default_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefaultInput"></a>

```python
use_in_app_default_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `condition_name`<sup>Required</sup> <a name="condition_name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionName"></a>

```python
condition_name: str
```

- *Type:* str

---

##### `use_in_app_default`<sup>Required</sup> <a name="use_in_app_default" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefault"></a>

```python
use_in_app_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetUseInAppDefault">reset_use_in_app_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_in_app_default` <a name="reset_use_in_app_default" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetUseInAppDefault"></a>

```python
def reset_use_in_app_default() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefaultInput">use_in_app_default_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefault">use_in_app_default</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `use_in_app_default_input`<sup>Optional</sup> <a name="use_in_app_default_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefaultInput"></a>

```python
use_in_app_default_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `use_in_app_default`<sup>Required</sup> <a name="use_in_app_default" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefault"></a>

```python
use_in_app_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersList <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>]

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues">put_conditional_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue">put_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetConditionalValues">reset_conditional_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetValueType">reset_value_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditional_values` <a name="put_conditional_values" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues"></a>

```python
def put_conditional_values(
  value: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>]

---

##### `put_default_value` <a name="put_default_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue"></a>

```python
def put_default_value(
  use_in_app_default: bool | IResolvable = None,
  value: str = None
) -> None
```

###### `use_in_app_default`<sup>Optional</sup> <a name="use_in_app_default" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue.parameter.useInAppDefault"></a>

- *Type:* bool | cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* str

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}

---

##### `reset_conditional_values` <a name="reset_conditional_values" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetConditionalValues"></a>

```python
def reset_conditional_values() -> None
```

##### `reset_default_value` <a name="reset_default_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_value_type` <a name="reset_value_type" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetValueType"></a>

```python
def reset_value_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValues">conditional_values</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValue">default_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValuesInput">conditional_values_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValueInput">default_value_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterNameInput">parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditional_values`<sup>Required</sup> <a name="conditional_values" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValues"></a>

```python
conditional_values: GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList</a>

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValue"></a>

```python
default_value: GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference</a>

---

##### `conditional_values_input`<sup>Optional</sup> <a name="conditional_values_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValuesInput"></a>

```python
conditional_values_input: IResolvable | typing.List[GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>]

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValueInput"></a>

```python
default_value_input: GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `parameter_name_input`<sup>Optional</sup> <a name="parameter_name_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterNameInput"></a>

```python
parameter_name_input: str
```

- *Type:* str

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigVersionList <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.isLegacy">is_legacy</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.rollbackSource">rollback_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateOrigin">update_origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateType">update_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateUser">update_user</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList">GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.versionNumber">version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersion">GoogleFirebaseRemoteConfigRemoteConfigVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_legacy`<sup>Required</sup> <a name="is_legacy" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.isLegacy"></a>

```python
is_legacy: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `rollback_source`<sup>Required</sup> <a name="rollback_source" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.rollbackSource"></a>

```python
rollback_source: str
```

- *Type:* str

---

##### `update_origin`<sup>Required</sup> <a name="update_origin" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateOrigin"></a>

```python
update_origin: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `update_type`<sup>Required</sup> <a name="update_type" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateType"></a>

```python
update_type: str
```

- *Type:* str

---

##### `update_user`<sup>Required</sup> <a name="update_user" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateUser"></a>

```python
update_user: GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList">GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList</a>

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.versionNumber"></a>

```python
version_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseRemoteConfigRemoteConfigVersion
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersion">GoogleFirebaseRemoteConfigRemoteConfigVersion</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_remote_config_remote_config

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.imageUrl">image_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser">GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `image_url`<sup>Required</sup> <a name="image_url" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.imageUrl"></a>

```python
image_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser">GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser</a>

---



