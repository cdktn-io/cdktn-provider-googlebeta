# `googleKmsFolderKajPolicyConfig` Submodule <a name="`googleKmsFolderKajPolicyConfig` Submodule" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsFolderKajPolicyConfig <a name="GoogleKmsFolderKajPolicyConfig" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config google_kms_folder_kaj_policy_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_kms_folder_kaj_policy_config

googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  folder: str,
  default_key_access_justification_policy: GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy = None,
  id: str = None,
  timeouts: GoogleKmsFolderKajPolicyConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.folder">folder</a></code> | <code>str</code> | The numeric folder number for which to retrieve config. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.defaultKeyAccessJustificationPolicy">default_key_access_justification_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | default_key_access_justification_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#id GoogleKmsFolderKajPolicyConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.folder"></a>

- *Type:* str

The numeric folder number for which to retrieve config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#folder GoogleKmsFolderKajPolicyConfig#folder}

---

##### `default_key_access_justification_policy`<sup>Optional</sup> <a name="default_key_access_justification_policy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.defaultKeyAccessJustificationPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

default_key_access_justification_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#default_key_access_justification_policy GoogleKmsFolderKajPolicyConfig#default_key_access_justification_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#id GoogleKmsFolderKajPolicyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#timeouts GoogleKmsFolderKajPolicyConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putDefaultKeyAccessJustificationPolicy">put_default_key_access_justification_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy">reset_default_key_access_justification_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_default_key_access_justification_policy` <a name="put_default_key_access_justification_policy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putDefaultKeyAccessJustificationPolicy"></a>

```python
def put_default_key_access_justification_policy(
  allowed_access_reasons: typing.List[str] = None
) -> None
```

###### `allowed_access_reasons`<sup>Optional</sup> <a name="allowed_access_reasons" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putDefaultKeyAccessJustificationPolicy.parameter.allowedAccessReasons"></a>

- *Type:* typing.List[str]

A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey.

Possible values: ["CUSTOMER_INITIATED_SUPPORT", "GOOGLE_INITIATED_SERVICE", "THIRD_PARTY_DATA_REQUEST", "GOOGLE_INITIATED_REVIEW", "CUSTOMER_INITIATED_ACCESS", "GOOGLE_INITIATED_SYSTEM_OPERATION", "REASON_NOT_EXPECTED", "MODIFIED_CUSTOMER_INITIATED_ACCESS", "MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION", "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT", "CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#allowed_access_reasons GoogleKmsFolderKajPolicyConfig#allowed_access_reasons}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#create GoogleKmsFolderKajPolicyConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#delete GoogleKmsFolderKajPolicyConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#update GoogleKmsFolderKajPolicyConfig#update}.

---

##### `reset_default_key_access_justification_policy` <a name="reset_default_key_access_justification_policy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy"></a>

```python
def reset_default_key_access_justification_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleKmsFolderKajPolicyConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_kms_folder_kaj_policy_config

googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_kms_folder_kaj_policy_config

googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_kms_folder_kaj_policy_config

googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_kms_folder_kaj_policy_config

googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleKmsFolderKajPolicyConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleKmsFolderKajPolicyConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleKmsFolderKajPolicyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleKmsFolderKajPolicyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.defaultKeyAccessJustificationPolicy">default_key_access_justification_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference">GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput">default_key_access_justification_policy_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default_key_access_justification_policy`<sup>Required</sup> <a name="default_key_access_justification_policy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.defaultKeyAccessJustificationPolicy"></a>

```python
default_key_access_justification_policy: GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference">GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference</a>

---

##### `default_key_access_justification_policy_input`<sup>Optional</sup> <a name="default_key_access_justification_policy_input" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput"></a>

```python
default_key_access_justification_policy_input: GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleKmsFolderKajPolicyConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsFolderKajPolicyConfigConfig <a name="GoogleKmsFolderKajPolicyConfigConfig" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_kms_folder_kaj_policy_config

googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  folder: str,
  default_key_access_justification_policy: GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy = None,
  id: str = None,
  timeouts: GoogleKmsFolderKajPolicyConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.folder">folder</a></code> | <code>str</code> | The numeric folder number for which to retrieve config. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy">default_key_access_justification_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | default_key_access_justification_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#id GoogleKmsFolderKajPolicyConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

The numeric folder number for which to retrieve config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#folder GoogleKmsFolderKajPolicyConfig#folder}

---

##### `default_key_access_justification_policy`<sup>Optional</sup> <a name="default_key_access_justification_policy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy"></a>

```python
default_key_access_justification_policy: GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

default_key_access_justification_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#default_key_access_justification_policy GoogleKmsFolderKajPolicyConfig#default_key_access_justification_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#id GoogleKmsFolderKajPolicyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleKmsFolderKajPolicyConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#timeouts GoogleKmsFolderKajPolicyConfig#timeouts}

---

### GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy <a name="GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_kms_folder_kaj_policy_config

googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy(
  allowed_access_reasons: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons">allowed_access_reasons</a></code> | <code>typing.List[str]</code> | A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey. |

---

##### `allowed_access_reasons`<sup>Optional</sup> <a name="allowed_access_reasons" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons"></a>

```python
allowed_access_reasons: typing.List[str]
```

- *Type:* typing.List[str]

A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey.

Possible values: ["CUSTOMER_INITIATED_SUPPORT", "GOOGLE_INITIATED_SERVICE", "THIRD_PARTY_DATA_REQUEST", "GOOGLE_INITIATED_REVIEW", "CUSTOMER_INITIATED_ACCESS", "GOOGLE_INITIATED_SYSTEM_OPERATION", "REASON_NOT_EXPECTED", "MODIFIED_CUSTOMER_INITIATED_ACCESS", "MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION", "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT", "CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#allowed_access_reasons GoogleKmsFolderKajPolicyConfig#allowed_access_reasons}

---

### GoogleKmsFolderKajPolicyConfigTimeouts <a name="GoogleKmsFolderKajPolicyConfigTimeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_kms_folder_kaj_policy_config

googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#create GoogleKmsFolderKajPolicyConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#delete GoogleKmsFolderKajPolicyConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#update GoogleKmsFolderKajPolicyConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#create GoogleKmsFolderKajPolicyConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#delete GoogleKmsFolderKajPolicyConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_folder_kaj_policy_config#update GoogleKmsFolderKajPolicyConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference <a name="GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_kms_folder_kaj_policy_config

googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons">reset_allowed_access_reasons</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_access_reasons` <a name="reset_allowed_access_reasons" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons"></a>

```python
def reset_allowed_access_reasons() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput">allowed_access_reasons_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons">allowed_access_reasons</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_access_reasons_input`<sup>Optional</sup> <a name="allowed_access_reasons_input" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput"></a>

```python
allowed_access_reasons_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_access_reasons`<sup>Required</sup> <a name="allowed_access_reasons" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons"></a>

```python
allowed_access_reasons: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---


### GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference <a name="GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_kms_folder_kaj_policy_config

googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleKmsFolderKajPolicyConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a>

---



