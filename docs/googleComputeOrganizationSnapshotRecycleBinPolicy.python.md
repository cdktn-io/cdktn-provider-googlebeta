# `googleComputeOrganizationSnapshotRecycleBinPolicy` Submodule <a name="`googleComputeOrganizationSnapshotRecycleBinPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeOrganizationSnapshotRecycleBinPolicy <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicy" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy google_compute_organization_snapshot_recycle_bin_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_snapshot_recycle_bin_policy

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  organization: str,
  id: str = None,
  rules: IResolvable | typing.List[GoogleComputeOrganizationSnapshotRecycleBinPolicyRules] = None,
  timeouts: GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The organization ID for this request (e.g., "organizations/1234"). |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#id GoogleComputeOrganizationSnapshotRecycleBinPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>]</code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.organization"></a>

- *Type:* str

The organization ID for this request (e.g., "organizations/1234").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#organization GoogleComputeOrganizationSnapshotRecycleBinPolicy#organization}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#id GoogleComputeOrganizationSnapshotRecycleBinPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#rules GoogleComputeOrganizationSnapshotRecycleBinPolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#timeouts GoogleComputeOrganizationSnapshotRecycleBinPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetRules">reset_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[GoogleComputeOrganizationSnapshotRecycleBinPolicyRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#create GoogleComputeOrganizationSnapshotRecycleBinPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#delete GoogleComputeOrganizationSnapshotRecycleBinPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#update GoogleComputeOrganizationSnapshotRecycleBinPolicy#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetRules"></a>

```python
def reset_rules() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleComputeOrganizationSnapshotRecycleBinPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_snapshot_recycle_bin_policy

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_snapshot_recycle_bin_policy

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_snapshot_recycle_bin_policy

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_snapshot_recycle_bin_policy

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleComputeOrganizationSnapshotRecycleBinPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeOrganizationSnapshotRecycleBinPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeOrganizationSnapshotRecycleBinPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeOrganizationSnapshotRecycleBinPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.systemRules">system_rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organization">organization</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rules"></a>

```python
rules: GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList</a>

---

##### `system_rules`<sup>Required</sup> <a name="system_rules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.systemRules"></a>

```python
system_rules: GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeouts"></a>

```python
timeouts: GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[GoogleComputeOrganizationSnapshotRecycleBinPolicyRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_snapshot_recycle_bin_policy

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  organization: str,
  id: str = None,
  rules: IResolvable | typing.List[GoogleComputeOrganizationSnapshotRecycleBinPolicyRules] = None,
  timeouts: GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.organization">organization</a></code> | <code>str</code> | The organization ID for this request (e.g., "organizations/1234"). |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#id GoogleComputeOrganizationSnapshotRecycleBinPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>]</code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The organization ID for this request (e.g., "organizations/1234").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#organization GoogleComputeOrganizationSnapshotRecycleBinPolicy#organization}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#id GoogleComputeOrganizationSnapshotRecycleBinPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.rules"></a>

```python
rules: IResolvable | typing.List[GoogleComputeOrganizationSnapshotRecycleBinPolicyRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#rules GoogleComputeOrganizationSnapshotRecycleBinPolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#timeouts GoogleComputeOrganizationSnapshotRecycleBinPolicy#timeouts}

---

### GoogleComputeOrganizationSnapshotRecycleBinPolicyRules <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_snapshot_recycle_bin_policy

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules(
  name: str,
  standard_snapshots: GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#name GoogleComputeOrganizationSnapshotRecycleBinPolicy#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.standardSnapshots">standard_snapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | standard_snapshots block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#name GoogleComputeOrganizationSnapshotRecycleBinPolicy#name}.

---

##### `standard_snapshots`<sup>Optional</sup> <a name="standard_snapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.standardSnapshots"></a>

```python
standard_snapshots: GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

standard_snapshots block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#standard_snapshots GoogleComputeOrganizationSnapshotRecycleBinPolicy#standard_snapshots}

---

### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_snapshot_recycle_bin_policy

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots(
  retention_duration_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots.property.retentionDurationDays">retention_duration_days</a></code> | <code>typing.Union[int, float]</code> | The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin. |

---

##### `retention_duration_days`<sup>Optional</sup> <a name="retention_duration_days" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots.property.retentionDurationDays"></a>

```python
retention_duration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#retention_duration_days GoogleComputeOrganizationSnapshotRecycleBinPolicy#retention_duration_days}

---

### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_snapshot_recycle_bin_policy

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules()
```


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_snapshot_recycle_bin_policy

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots()
```


### GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_snapshot_recycle_bin_policy

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#create GoogleComputeOrganizationSnapshotRecycleBinPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#delete GoogleComputeOrganizationSnapshotRecycleBinPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#update GoogleComputeOrganizationSnapshotRecycleBinPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#create GoogleComputeOrganizationSnapshotRecycleBinPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#delete GoogleComputeOrganizationSnapshotRecycleBinPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#update GoogleComputeOrganizationSnapshotRecycleBinPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_snapshot_recycle_bin_policy

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleComputeOrganizationSnapshotRecycleBinPolicyRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>]

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_snapshot_recycle_bin_policy

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots">put_standard_snapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resetStandardSnapshots">reset_standard_snapshots</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_standard_snapshots` <a name="put_standard_snapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots"></a>

```python
def put_standard_snapshots(
  retention_duration_days: typing.Union[int, float] = None
) -> None
```

###### `retention_duration_days`<sup>Optional</sup> <a name="retention_duration_days" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots.parameter.retentionDurationDays"></a>

- *Type:* typing.Union[int, float]

The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#retention_duration_days GoogleComputeOrganizationSnapshotRecycleBinPolicy#retention_duration_days}

---

##### `reset_standard_snapshots` <a name="reset_standard_snapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resetStandardSnapshots"></a>

```python
def reset_standard_snapshots() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshots">standard_snapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshotsInput">standard_snapshots_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `standard_snapshots`<sup>Required</sup> <a name="standard_snapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshots"></a>

```python
standard_snapshots: GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `standard_snapshots_input`<sup>Optional</sup> <a name="standard_snapshots_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshotsInput"></a>

```python
standard_snapshots_input: GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleComputeOrganizationSnapshotRecycleBinPolicyRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_snapshot_recycle_bin_policy

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resetRetentionDurationDays">reset_retention_duration_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retention_duration_days` <a name="reset_retention_duration_days" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resetRetentionDurationDays"></a>

```python
def reset_retention_duration_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDaysInput">retention_duration_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDays">retention_duration_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_duration_days_input`<sup>Optional</sup> <a name="retention_duration_days_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDaysInput"></a>

```python
retention_duration_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_duration_days`<sup>Required</sup> <a name="retention_duration_days" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDays"></a>

```python
retention_duration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_snapshot_recycle_bin_policy

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_snapshot_recycle_bin_policy

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.standardSnapshots">standard_snapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `standard_snapshots`<sup>Required</sup> <a name="standard_snapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.standardSnapshots"></a>

```python
standard_snapshots: GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules</a>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_snapshot_recycle_bin_policy

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_snapshot_recycle_bin_policy

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.retentionDurationDays">retention_duration_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_duration_days`<sup>Required</sup> <a name="retention_duration_days" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.retentionDurationDays"></a>

```python
retention_duration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots</a>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_organization_snapshot_recycle_bin_policy

googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a>

---



