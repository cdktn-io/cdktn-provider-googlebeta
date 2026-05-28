# `googleComputeRegionBackendBucketIamBinding` Submodule <a name="`googleComputeRegionBackendBucketIamBinding` Submodule" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionBackendBucketIamBinding <a name="GoogleComputeRegionBackendBucketIamBinding" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding google_compute_region_backend_bucket_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_backend_bucket_iam_binding

googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  members: typing.List[str],
  name: str,
  role: str,
  condition: GoogleComputeRegionBackendBucketIamBindingCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#members GoogleComputeRegionBackendBucketIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#name GoogleComputeRegionBackendBucketIamBinding#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#role GoogleComputeRegionBackendBucketIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingCondition">GoogleComputeRegionBackendBucketIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#id GoogleComputeRegionBackendBucketIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#project GoogleComputeRegionBackendBucketIamBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#region GoogleComputeRegionBackendBucketIamBinding#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#members GoogleComputeRegionBackendBucketIamBinding#members}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#name GoogleComputeRegionBackendBucketIamBinding#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#role GoogleComputeRegionBackendBucketIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingCondition">GoogleComputeRegionBackendBucketIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#condition GoogleComputeRegionBackendBucketIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#id GoogleComputeRegionBackendBucketIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#project GoogleComputeRegionBackendBucketIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#region GoogleComputeRegionBackendBucketIamBinding#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#expression GoogleComputeRegionBackendBucketIamBinding#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#title GoogleComputeRegionBackendBucketIamBinding#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#description GoogleComputeRegionBackendBucketIamBinding#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleComputeRegionBackendBucketIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_compute_region_backend_bucket_iam_binding

googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_compute_region_backend_bucket_iam_binding

googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_compute_region_backend_bucket_iam_binding

googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_compute_region_backend_bucket_iam_binding

googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleComputeRegionBackendBucketIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeRegionBackendBucketIamBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeRegionBackendBucketIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionBackendBucketIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference">GoogleComputeRegionBackendBucketIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingCondition">GoogleComputeRegionBackendBucketIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.condition"></a>

```python
condition: GoogleComputeRegionBackendBucketIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference">GoogleComputeRegionBackendBucketIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.conditionInput"></a>

```python
condition_input: GoogleComputeRegionBackendBucketIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingCondition">GoogleComputeRegionBackendBucketIamBindingCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionBackendBucketIamBindingCondition <a name="GoogleComputeRegionBackendBucketIamBindingCondition" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingCondition.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_backend_bucket_iam_binding

googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#expression GoogleComputeRegionBackendBucketIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#title GoogleComputeRegionBackendBucketIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#description GoogleComputeRegionBackendBucketIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#expression GoogleComputeRegionBackendBucketIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#title GoogleComputeRegionBackendBucketIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#description GoogleComputeRegionBackendBucketIamBinding#description}.

---

### GoogleComputeRegionBackendBucketIamBindingConfig <a name="GoogleComputeRegionBackendBucketIamBindingConfig" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_backend_bucket_iam_binding

googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  members: typing.List[str],
  name: str,
  role: str,
  condition: GoogleComputeRegionBackendBucketIamBindingCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#members GoogleComputeRegionBackendBucketIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#name GoogleComputeRegionBackendBucketIamBinding#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#role GoogleComputeRegionBackendBucketIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingCondition">GoogleComputeRegionBackendBucketIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#id GoogleComputeRegionBackendBucketIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#project GoogleComputeRegionBackendBucketIamBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#region GoogleComputeRegionBackendBucketIamBinding#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#members GoogleComputeRegionBackendBucketIamBinding#members}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#name GoogleComputeRegionBackendBucketIamBinding#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#role GoogleComputeRegionBackendBucketIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.condition"></a>

```python
condition: GoogleComputeRegionBackendBucketIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingCondition">GoogleComputeRegionBackendBucketIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#condition GoogleComputeRegionBackendBucketIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#id GoogleComputeRegionBackendBucketIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#project GoogleComputeRegionBackendBucketIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_binding#region GoogleComputeRegionBackendBucketIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionBackendBucketIamBindingConditionOutputReference <a name="GoogleComputeRegionBackendBucketIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_backend_bucket_iam_binding

googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingCondition">GoogleComputeRegionBackendBucketIamBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionBackendBucketIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamBinding.GoogleComputeRegionBackendBucketIamBindingCondition">GoogleComputeRegionBackendBucketIamBindingCondition</a>

---



