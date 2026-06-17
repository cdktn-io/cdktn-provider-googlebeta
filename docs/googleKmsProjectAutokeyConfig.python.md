# `googleKmsProjectAutokeyConfig` Submodule <a name="`googleKmsProjectAutokeyConfig` Submodule" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsProjectAutokeyConfig <a name="GoogleKmsProjectAutokeyConfig" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config google_kms_project_autokey_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_kms_project_autokey_config

googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deletion_policy: str = None,
  id: str = None,
  key_project_resolution_mode: str = None,
  project: str = None,
  timeouts: GoogleKmsProjectAutokeyConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#id GoogleKmsProjectAutokeyConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.keyProjectResolutionMode">key_project_resolution_mode</a></code> | <code>str</code> | How Autokey determines which project to use when provisioning CMEK keys. Possible values: ["RESOURCE_PROJECT", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#project GoogleKmsProjectAutokeyConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts">GoogleKmsProjectAutokeyConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#deletion_policy GoogleKmsProjectAutokeyConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#id GoogleKmsProjectAutokeyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_project_resolution_mode`<sup>Optional</sup> <a name="key_project_resolution_mode" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.keyProjectResolutionMode"></a>

- *Type:* str

How Autokey determines which project to use when provisioning CMEK keys. Possible values: ["RESOURCE_PROJECT", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#key_project_resolution_mode GoogleKmsProjectAutokeyConfig#key_project_resolution_mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#project GoogleKmsProjectAutokeyConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts">GoogleKmsProjectAutokeyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#timeouts GoogleKmsProjectAutokeyConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetKeyProjectResolutionMode">reset_key_project_resolution_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#create GoogleKmsProjectAutokeyConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#delete GoogleKmsProjectAutokeyConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#update GoogleKmsProjectAutokeyConfig#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_project_resolution_mode` <a name="reset_key_project_resolution_mode" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetKeyProjectResolutionMode"></a>

```python
def reset_key_project_resolution_mode() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleKmsProjectAutokeyConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_kms_project_autokey_config

googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_kms_project_autokey_config

googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_kms_project_autokey_config

googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_kms_project_autokey_config

googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleKmsProjectAutokeyConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleKmsProjectAutokeyConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleKmsProjectAutokeyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleKmsProjectAutokeyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference">GoogleKmsProjectAutokeyConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.keyProjectResolutionModeInput">key_project_resolution_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts">GoogleKmsProjectAutokeyConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.keyProjectResolutionMode">key_project_resolution_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.timeouts"></a>

```python
timeouts: GoogleKmsProjectAutokeyConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference">GoogleKmsProjectAutokeyConfigTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_project_resolution_mode_input`<sup>Optional</sup> <a name="key_project_resolution_mode_input" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.keyProjectResolutionModeInput"></a>

```python
key_project_resolution_mode_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleKmsProjectAutokeyConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts">GoogleKmsProjectAutokeyConfigTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_project_resolution_mode`<sup>Required</sup> <a name="key_project_resolution_mode" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.keyProjectResolutionMode"></a>

```python
key_project_resolution_mode: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsProjectAutokeyConfigConfig <a name="GoogleKmsProjectAutokeyConfigConfig" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_kms_project_autokey_config

googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deletion_policy: str = None,
  id: str = None,
  key_project_resolution_mode: str = None,
  project: str = None,
  timeouts: GoogleKmsProjectAutokeyConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#id GoogleKmsProjectAutokeyConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.keyProjectResolutionMode">key_project_resolution_mode</a></code> | <code>str</code> | How Autokey determines which project to use when provisioning CMEK keys. Possible values: ["RESOURCE_PROJECT", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#project GoogleKmsProjectAutokeyConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts">GoogleKmsProjectAutokeyConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#deletion_policy GoogleKmsProjectAutokeyConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#id GoogleKmsProjectAutokeyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_project_resolution_mode`<sup>Optional</sup> <a name="key_project_resolution_mode" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.keyProjectResolutionMode"></a>

```python
key_project_resolution_mode: str
```

- *Type:* str

How Autokey determines which project to use when provisioning CMEK keys. Possible values: ["RESOURCE_PROJECT", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#key_project_resolution_mode GoogleKmsProjectAutokeyConfig#key_project_resolution_mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#project GoogleKmsProjectAutokeyConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleKmsProjectAutokeyConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts">GoogleKmsProjectAutokeyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#timeouts GoogleKmsProjectAutokeyConfig#timeouts}

---

### GoogleKmsProjectAutokeyConfigTimeouts <a name="GoogleKmsProjectAutokeyConfigTimeouts" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_kms_project_autokey_config

googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#create GoogleKmsProjectAutokeyConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#delete GoogleKmsProjectAutokeyConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#update GoogleKmsProjectAutokeyConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#create GoogleKmsProjectAutokeyConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#delete GoogleKmsProjectAutokeyConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_project_autokey_config#update GoogleKmsProjectAutokeyConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsProjectAutokeyConfigTimeoutsOutputReference <a name="GoogleKmsProjectAutokeyConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_kms_project_autokey_config

googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts">GoogleKmsProjectAutokeyConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleKmsProjectAutokeyConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts">GoogleKmsProjectAutokeyConfigTimeouts</a>

---



