# `googleCesSecuritySettings` Submodule <a name="`googleCesSecuritySettings` Submodule" id="@cdktn/provider-google-beta.googleCesSecuritySettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesSecuritySettings <a name="GoogleCesSecuritySettings" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings google_ces_security_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_security_settings

googleCesSecuritySettings.GoogleCesSecuritySettings(
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
  endpoint_control_policy: GoogleCesSecuritySettingsEndpointControlPolicy = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleCesSecuritySettingsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the security settings. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.endpointControlPolicy">endpoint_control_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy">GoogleCesSecuritySettingsEndpointControlPolicy</a></code> | endpoint_control_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#id GoogleCesSecuritySettings#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#project GoogleCesSecuritySettings#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts">GoogleCesSecuritySettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.location"></a>

- *Type:* str

The location of the security settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#location GoogleCesSecuritySettings#location}

---

##### `endpoint_control_policy`<sup>Optional</sup> <a name="endpoint_control_policy" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.endpointControlPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy">GoogleCesSecuritySettingsEndpointControlPolicy</a>

endpoint_control_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#endpoint_control_policy GoogleCesSecuritySettings#endpoint_control_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#id GoogleCesSecuritySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#project GoogleCesSecuritySettings#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts">GoogleCesSecuritySettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#timeouts GoogleCesSecuritySettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.putEndpointControlPolicy">put_endpoint_control_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetEndpointControlPolicy">reset_endpoint_control_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_endpoint_control_policy` <a name="put_endpoint_control_policy" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.putEndpointControlPolicy"></a>

```python
def put_endpoint_control_policy(
  allowed_origins: typing.List[str] = None,
  enforcement_scope: str = None
) -> None
```

###### `allowed_origins`<sup>Optional</sup> <a name="allowed_origins" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.putEndpointControlPolicy.parameter.allowedOrigins"></a>

- *Type:* typing.List[str]

Optional. The allowed HTTP(s) origins that tools in the App are able to directly call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#allowed_origins GoogleCesSecuritySettings#allowed_origins}

---

###### `enforcement_scope`<sup>Optional</sup> <a name="enforcement_scope" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.putEndpointControlPolicy.parameter.enforcementScope"></a>

- *Type:* str

Optional. The scope in which this policy's allowedOrigins list is enforced. Possible values: ["ENFORCEMENT_SCOPE_UNSPECIFIED", "VPCSC_ONLY", "ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#enforcement_scope GoogleCesSecuritySettings#enforcement_scope}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#create GoogleCesSecuritySettings#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#delete GoogleCesSecuritySettings#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#update GoogleCesSecuritySettings#update}.

---

##### `reset_endpoint_control_policy` <a name="reset_endpoint_control_policy" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetEndpointControlPolicy"></a>

```python
def reset_endpoint_control_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleCesSecuritySettings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_ces_security_settings

googleCesSecuritySettings.GoogleCesSecuritySettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_ces_security_settings

googleCesSecuritySettings.GoogleCesSecuritySettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_ces_security_settings

googleCesSecuritySettings.GoogleCesSecuritySettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_ces_security_settings

googleCesSecuritySettings.GoogleCesSecuritySettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleCesSecuritySettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCesSecuritySettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCesSecuritySettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesSecuritySettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.endpointControlPolicy">endpoint_control_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference">GoogleCesSecuritySettingsEndpointControlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference">GoogleCesSecuritySettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.endpointControlPolicyInput">endpoint_control_policy_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy">GoogleCesSecuritySettingsEndpointControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts">GoogleCesSecuritySettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `endpoint_control_policy`<sup>Required</sup> <a name="endpoint_control_policy" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.endpointControlPolicy"></a>

```python
endpoint_control_policy: GoogleCesSecuritySettingsEndpointControlPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference">GoogleCesSecuritySettingsEndpointControlPolicyOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.timeouts"></a>

```python
timeouts: GoogleCesSecuritySettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference">GoogleCesSecuritySettingsTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `endpoint_control_policy_input`<sup>Optional</sup> <a name="endpoint_control_policy_input" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.endpointControlPolicyInput"></a>

```python
endpoint_control_policy_input: GoogleCesSecuritySettingsEndpointControlPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy">GoogleCesSecuritySettingsEndpointControlPolicy</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleCesSecuritySettingsTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts">GoogleCesSecuritySettingsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesSecuritySettingsConfig <a name="GoogleCesSecuritySettingsConfig" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_security_settings

googleCesSecuritySettings.GoogleCesSecuritySettingsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  endpoint_control_policy: GoogleCesSecuritySettingsEndpointControlPolicy = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleCesSecuritySettingsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.location">location</a></code> | <code>str</code> | The location of the security settings. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.endpointControlPolicy">endpoint_control_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy">GoogleCesSecuritySettingsEndpointControlPolicy</a></code> | endpoint_control_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#id GoogleCesSecuritySettings#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#project GoogleCesSecuritySettings#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts">GoogleCesSecuritySettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the security settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#location GoogleCesSecuritySettings#location}

---

##### `endpoint_control_policy`<sup>Optional</sup> <a name="endpoint_control_policy" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.endpointControlPolicy"></a>

```python
endpoint_control_policy: GoogleCesSecuritySettingsEndpointControlPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy">GoogleCesSecuritySettingsEndpointControlPolicy</a>

endpoint_control_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#endpoint_control_policy GoogleCesSecuritySettings#endpoint_control_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#id GoogleCesSecuritySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#project GoogleCesSecuritySettings#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsConfig.property.timeouts"></a>

```python
timeouts: GoogleCesSecuritySettingsTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts">GoogleCesSecuritySettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#timeouts GoogleCesSecuritySettings#timeouts}

---

### GoogleCesSecuritySettingsEndpointControlPolicy <a name="GoogleCesSecuritySettingsEndpointControlPolicy" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_security_settings

googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy(
  allowed_origins: typing.List[str] = None,
  enforcement_scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Optional. The allowed HTTP(s) origins that tools in the App are able to directly call. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy.property.enforcementScope">enforcement_scope</a></code> | <code>str</code> | Optional. The scope in which this policy's allowedOrigins list is enforced. Possible values: ["ENFORCEMENT_SCOPE_UNSPECIFIED", "VPCSC_ONLY", "ALWAYS"]. |

---

##### `allowed_origins`<sup>Optional</sup> <a name="allowed_origins" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Optional. The allowed HTTP(s) origins that tools in the App are able to directly call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#allowed_origins GoogleCesSecuritySettings#allowed_origins}

---

##### `enforcement_scope`<sup>Optional</sup> <a name="enforcement_scope" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy.property.enforcementScope"></a>

```python
enforcement_scope: str
```

- *Type:* str

Optional. The scope in which this policy's allowedOrigins list is enforced. Possible values: ["ENFORCEMENT_SCOPE_UNSPECIFIED", "VPCSC_ONLY", "ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#enforcement_scope GoogleCesSecuritySettings#enforcement_scope}

---

### GoogleCesSecuritySettingsTimeouts <a name="GoogleCesSecuritySettingsTimeouts" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_security_settings

googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#create GoogleCesSecuritySettings#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#delete GoogleCesSecuritySettings#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#update GoogleCesSecuritySettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#create GoogleCesSecuritySettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#delete GoogleCesSecuritySettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_ces_security_settings#update GoogleCesSecuritySettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesSecuritySettingsEndpointControlPolicyOutputReference <a name="GoogleCesSecuritySettingsEndpointControlPolicyOutputReference" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_security_settings

googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.resetAllowedOrigins">reset_allowed_origins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.resetEnforcementScope">reset_enforcement_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_origins` <a name="reset_allowed_origins" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.resetAllowedOrigins"></a>

```python
def reset_allowed_origins() -> None
```

##### `reset_enforcement_scope` <a name="reset_enforcement_scope" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.resetEnforcementScope"></a>

```python
def reset_enforcement_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.enforcementScopeInput">enforcement_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.enforcementScope">enforcement_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy">GoogleCesSecuritySettingsEndpointControlPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enforcement_scope_input`<sup>Optional</sup> <a name="enforcement_scope_input" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.enforcementScopeInput"></a>

```python
enforcement_scope_input: str
```

- *Type:* str

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enforcement_scope`<sup>Required</sup> <a name="enforcement_scope" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.enforcementScope"></a>

```python
enforcement_scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesSecuritySettingsEndpointControlPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsEndpointControlPolicy">GoogleCesSecuritySettingsEndpointControlPolicy</a>

---


### GoogleCesSecuritySettingsTimeoutsOutputReference <a name="GoogleCesSecuritySettingsTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_security_settings

googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts">GoogleCesSecuritySettingsTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesSecuritySettingsTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesSecuritySettings.GoogleCesSecuritySettingsTimeouts">GoogleCesSecuritySettingsTimeouts</a>

---



