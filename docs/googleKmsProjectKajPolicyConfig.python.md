# `googleKmsProjectKajPolicyConfig` Submodule <a name="`googleKmsProjectKajPolicyConfig` Submodule" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsProjectKajPolicyConfig <a name="GoogleKmsProjectKajPolicyConfig" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config google_kms_project_kaj_policy_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_kms_project_kaj_policy_config

googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_key_access_justification_policy: GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleKmsProjectKajPolicyConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.defaultKeyAccessJustificationPolicy">default_key_access_justification_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | default_key_access_justification_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#id GoogleKmsProjectKajPolicyConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#project GoogleKmsProjectKajPolicyConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts">GoogleKmsProjectKajPolicyConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default_key_access_justification_policy`<sup>Optional</sup> <a name="default_key_access_justification_policy" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.defaultKeyAccessJustificationPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

default_key_access_justification_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#default_key_access_justification_policy GoogleKmsProjectKajPolicyConfig#default_key_access_justification_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#id GoogleKmsProjectKajPolicyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#project GoogleKmsProjectKajPolicyConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts">GoogleKmsProjectKajPolicyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#timeouts GoogleKmsProjectKajPolicyConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.putDefaultKeyAccessJustificationPolicy">put_default_key_access_justification_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy">reset_default_key_access_justification_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_default_key_access_justification_policy` <a name="put_default_key_access_justification_policy" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.putDefaultKeyAccessJustificationPolicy"></a>

```python
def put_default_key_access_justification_policy(
  allowed_access_reasons: typing.List[str] = None
) -> None
```

###### `allowed_access_reasons`<sup>Optional</sup> <a name="allowed_access_reasons" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.putDefaultKeyAccessJustificationPolicy.parameter.allowedAccessReasons"></a>

- *Type:* typing.List[str]

A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey.

Possible values: ["CUSTOMER_INITIATED_SUPPORT", "GOOGLE_INITIATED_SERVICE", "THIRD_PARTY_DATA_REQUEST", "GOOGLE_INITIATED_REVIEW", "CUSTOMER_INITIATED_ACCESS", "GOOGLE_INITIATED_SYSTEM_OPERATION", "REASON_NOT_EXPECTED", "MODIFIED_CUSTOMER_INITIATED_ACCESS", "MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION", "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT", "CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#allowed_access_reasons GoogleKmsProjectKajPolicyConfig#allowed_access_reasons}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#create GoogleKmsProjectKajPolicyConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#delete GoogleKmsProjectKajPolicyConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#update GoogleKmsProjectKajPolicyConfig#update}.

---

##### `reset_default_key_access_justification_policy` <a name="reset_default_key_access_justification_policy" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy"></a>

```python
def reset_default_key_access_justification_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleKmsProjectKajPolicyConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_kms_project_kaj_policy_config

googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_kms_project_kaj_policy_config

googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_kms_project_kaj_policy_config

googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_kms_project_kaj_policy_config

googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleKmsProjectKajPolicyConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleKmsProjectKajPolicyConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleKmsProjectKajPolicyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleKmsProjectKajPolicyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.defaultKeyAccessJustificationPolicy">default_key_access_justification_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference">GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput">default_key_access_justification_policy_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts">GoogleKmsProjectKajPolicyConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default_key_access_justification_policy`<sup>Required</sup> <a name="default_key_access_justification_policy" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.defaultKeyAccessJustificationPolicy"></a>

```python
default_key_access_justification_policy: GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference">GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference</a>

---

##### `default_key_access_justification_policy_input`<sup>Optional</sup> <a name="default_key_access_justification_policy_input" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput"></a>

```python
default_key_access_justification_policy_input: GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleKmsProjectKajPolicyConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts">GoogleKmsProjectKajPolicyConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsProjectKajPolicyConfigConfig <a name="GoogleKmsProjectKajPolicyConfigConfig" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_kms_project_kaj_policy_config

googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_key_access_justification_policy: GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleKmsProjectKajPolicyConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy">default_key_access_justification_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | default_key_access_justification_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#id GoogleKmsProjectKajPolicyConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#project GoogleKmsProjectKajPolicyConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts">GoogleKmsProjectKajPolicyConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default_key_access_justification_policy`<sup>Optional</sup> <a name="default_key_access_justification_policy" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy"></a>

```python
default_key_access_justification_policy: GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

default_key_access_justification_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#default_key_access_justification_policy GoogleKmsProjectKajPolicyConfig#default_key_access_justification_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#id GoogleKmsProjectKajPolicyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#project GoogleKmsProjectKajPolicyConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleKmsProjectKajPolicyConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts">GoogleKmsProjectKajPolicyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#timeouts GoogleKmsProjectKajPolicyConfig#timeouts}

---

### GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy <a name="GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_kms_project_kaj_policy_config

googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy(
  allowed_access_reasons: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons">allowed_access_reasons</a></code> | <code>typing.List[str]</code> | A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey. |

---

##### `allowed_access_reasons`<sup>Optional</sup> <a name="allowed_access_reasons" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons"></a>

```python
allowed_access_reasons: typing.List[str]
```

- *Type:* typing.List[str]

A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey.

Possible values: ["CUSTOMER_INITIATED_SUPPORT", "GOOGLE_INITIATED_SERVICE", "THIRD_PARTY_DATA_REQUEST", "GOOGLE_INITIATED_REVIEW", "CUSTOMER_INITIATED_ACCESS", "GOOGLE_INITIATED_SYSTEM_OPERATION", "REASON_NOT_EXPECTED", "MODIFIED_CUSTOMER_INITIATED_ACCESS", "MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION", "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT", "CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#allowed_access_reasons GoogleKmsProjectKajPolicyConfig#allowed_access_reasons}

---

### GoogleKmsProjectKajPolicyConfigTimeouts <a name="GoogleKmsProjectKajPolicyConfigTimeouts" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_kms_project_kaj_policy_config

googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#create GoogleKmsProjectKajPolicyConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#delete GoogleKmsProjectKajPolicyConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#update GoogleKmsProjectKajPolicyConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#create GoogleKmsProjectKajPolicyConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#delete GoogleKmsProjectKajPolicyConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_kms_project_kaj_policy_config#update GoogleKmsProjectKajPolicyConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference <a name="GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_kms_project_kaj_policy_config

googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons">reset_allowed_access_reasons</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_access_reasons` <a name="reset_allowed_access_reasons" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons"></a>

```python
def reset_allowed_access_reasons() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput">allowed_access_reasons_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons">allowed_access_reasons</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_access_reasons_input`<sup>Optional</sup> <a name="allowed_access_reasons_input" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput"></a>

```python
allowed_access_reasons_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_access_reasons`<sup>Required</sup> <a name="allowed_access_reasons" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons"></a>

```python
allowed_access_reasons: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsProjectKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---


### GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference <a name="GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_kms_project_kaj_policy_config

googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts">GoogleKmsProjectKajPolicyConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleKmsProjectKajPolicyConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleKmsProjectKajPolicyConfig.GoogleKmsProjectKajPolicyConfigTimeouts">GoogleKmsProjectKajPolicyConfigTimeouts</a>

---



