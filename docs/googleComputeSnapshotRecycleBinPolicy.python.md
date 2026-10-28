# `googleComputeSnapshotRecycleBinPolicy` Submodule <a name="`googleComputeSnapshotRecycleBinPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeSnapshotRecycleBinPolicy <a name="GoogleComputeSnapshotRecycleBinPolicy" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy google_compute_snapshot_recycle_bin_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_snapshot_recycle_bin_policy

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy(
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
  project: str = None,
  rules: IResolvable | typing.List[GoogleComputeSnapshotRecycleBinPolicyRules] = None,
  timeouts: GoogleComputeSnapshotRecycleBinPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#id GoogleComputeSnapshotRecycleBinPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#project GoogleComputeSnapshotRecycleBinPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>]</code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#id GoogleComputeSnapshotRecycleBinPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#project GoogleComputeSnapshotRecycleBinPolicy#project}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#rules GoogleComputeSnapshotRecycleBinPolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#timeouts GoogleComputeSnapshotRecycleBinPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetRules">reset_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[GoogleComputeSnapshotRecycleBinPolicyRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#create GoogleComputeSnapshotRecycleBinPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#delete GoogleComputeSnapshotRecycleBinPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#update GoogleComputeSnapshotRecycleBinPolicy#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetRules"></a>

```python
def reset_rules() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleComputeSnapshotRecycleBinPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_compute_snapshot_recycle_bin_policy

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_compute_snapshot_recycle_bin_policy

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_compute_snapshot_recycle_bin_policy

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_compute_snapshot_recycle_bin_policy

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleComputeSnapshotRecycleBinPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeSnapshotRecycleBinPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeSnapshotRecycleBinPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeSnapshotRecycleBinPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList">GoogleComputeSnapshotRecycleBinPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.systemRules">system_rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList">GoogleComputeSnapshotRecycleBinPolicySystemRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference">GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.rules"></a>

```python
rules: GoogleComputeSnapshotRecycleBinPolicyRulesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList">GoogleComputeSnapshotRecycleBinPolicyRulesList</a>

---

##### `system_rules`<sup>Required</sup> <a name="system_rules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.systemRules"></a>

```python
system_rules: GoogleComputeSnapshotRecycleBinPolicySystemRulesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList">GoogleComputeSnapshotRecycleBinPolicySystemRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.timeouts"></a>

```python
timeouts: GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference">GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[GoogleComputeSnapshotRecycleBinPolicyRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleComputeSnapshotRecycleBinPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeSnapshotRecycleBinPolicyConfig <a name="GoogleComputeSnapshotRecycleBinPolicyConfig" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_snapshot_recycle_bin_policy

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  project: str = None,
  rules: IResolvable | typing.List[GoogleComputeSnapshotRecycleBinPolicyRules] = None,
  timeouts: GoogleComputeSnapshotRecycleBinPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#id GoogleComputeSnapshotRecycleBinPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#project GoogleComputeSnapshotRecycleBinPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>]</code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#id GoogleComputeSnapshotRecycleBinPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#project GoogleComputeSnapshotRecycleBinPolicy#project}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.rules"></a>

```python
rules: IResolvable | typing.List[GoogleComputeSnapshotRecycleBinPolicyRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#rules GoogleComputeSnapshotRecycleBinPolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeSnapshotRecycleBinPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#timeouts GoogleComputeSnapshotRecycleBinPolicy#timeouts}

---

### GoogleComputeSnapshotRecycleBinPolicyRules <a name="GoogleComputeSnapshotRecycleBinPolicyRules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_snapshot_recycle_bin_policy

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules(
  name: str,
  standard_snapshots: GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#name GoogleComputeSnapshotRecycleBinPolicy#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.property.standardSnapshots">standard_snapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | standard_snapshots block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#name GoogleComputeSnapshotRecycleBinPolicy#name}.

---

##### `standard_snapshots`<sup>Optional</sup> <a name="standard_snapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.property.standardSnapshots"></a>

```python
standard_snapshots: GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

standard_snapshots block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#standard_snapshots GoogleComputeSnapshotRecycleBinPolicy#standard_snapshots}

---

### GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots <a name="GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_snapshot_recycle_bin_policy

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots(
  retention_duration_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots.property.retentionDurationDays">retention_duration_days</a></code> | <code>typing.Union[int, float]</code> | The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin. |

---

##### `retention_duration_days`<sup>Optional</sup> <a name="retention_duration_days" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots.property.retentionDurationDays"></a>

```python
retention_duration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#retention_duration_days GoogleComputeSnapshotRecycleBinPolicy#retention_duration_days}

---

### GoogleComputeSnapshotRecycleBinPolicySystemRules <a name="GoogleComputeSnapshotRecycleBinPolicySystemRules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRules.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_snapshot_recycle_bin_policy

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRules()
```


### GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_snapshot_recycle_bin_policy

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots()
```


### GoogleComputeSnapshotRecycleBinPolicyTimeouts <a name="GoogleComputeSnapshotRecycleBinPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_snapshot_recycle_bin_policy

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#create GoogleComputeSnapshotRecycleBinPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#delete GoogleComputeSnapshotRecycleBinPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#update GoogleComputeSnapshotRecycleBinPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#create GoogleComputeSnapshotRecycleBinPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#delete GoogleComputeSnapshotRecycleBinPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#update GoogleComputeSnapshotRecycleBinPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeSnapshotRecycleBinPolicyRulesList <a name="GoogleComputeSnapshotRecycleBinPolicyRulesList" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_snapshot_recycle_bin_policy

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleComputeSnapshotRecycleBinPolicyRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>]

---


### GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_snapshot_recycle_bin_policy

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots">put_standard_snapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resetStandardSnapshots">reset_standard_snapshots</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_standard_snapshots` <a name="put_standard_snapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots"></a>

```python
def put_standard_snapshots(
  retention_duration_days: typing.Union[int, float] = None
) -> None
```

###### `retention_duration_days`<sup>Optional</sup> <a name="retention_duration_days" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots.parameter.retentionDurationDays"></a>

- *Type:* typing.Union[int, float]

The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_snapshot_recycle_bin_policy#retention_duration_days GoogleComputeSnapshotRecycleBinPolicy#retention_duration_days}

---

##### `reset_standard_snapshots` <a name="reset_standard_snapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resetStandardSnapshots"></a>

```python
def reset_standard_snapshots() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshots">standard_snapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshotsInput">standard_snapshots_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `standard_snapshots`<sup>Required</sup> <a name="standard_snapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshots"></a>

```python
standard_snapshots: GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `standard_snapshots_input`<sup>Optional</sup> <a name="standard_snapshots_input" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshotsInput"></a>

```python
standard_snapshots_input: GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleComputeSnapshotRecycleBinPolicyRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules">GoogleComputeSnapshotRecycleBinPolicyRules</a>

---


### GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_snapshot_recycle_bin_policy

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resetRetentionDurationDays">reset_retention_duration_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retention_duration_days` <a name="reset_retention_duration_days" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resetRetentionDurationDays"></a>

```python
def reset_retention_duration_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDaysInput">retention_duration_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDays">retention_duration_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_duration_days_input`<sup>Optional</sup> <a name="retention_duration_days_input" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDaysInput"></a>

```python
retention_duration_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_duration_days`<sup>Required</sup> <a name="retention_duration_days" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDays"></a>

```python
retention_duration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---


### GoogleComputeSnapshotRecycleBinPolicySystemRulesList <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesList" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_snapshot_recycle_bin_policy

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_snapshot_recycle_bin_policy

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.standardSnapshots">standard_snapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList">GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRules">GoogleComputeSnapshotRecycleBinPolicySystemRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `standard_snapshots`<sup>Required</sup> <a name="standard_snapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.standardSnapshots"></a>

```python
standard_snapshots: GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList">GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeSnapshotRecycleBinPolicySystemRules
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRules">GoogleComputeSnapshotRecycleBinPolicySystemRules</a>

---


### GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_snapshot_recycle_bin_policy

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_snapshot_recycle_bin_policy

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.retentionDurationDays">retention_duration_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_duration_days`<sup>Required</sup> <a name="retention_duration_days" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.retentionDurationDays"></a>

```python
retention_duration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots</a>

---


### GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_snapshot_recycle_bin_policy

googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleComputeSnapshotRecycleBinPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a>

---



