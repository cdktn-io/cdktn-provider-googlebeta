# `googleComputeRegionBackendBucketIamMember` Submodule <a name="`googleComputeRegionBackendBucketIamMember` Submodule" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionBackendBucketIamMember <a name="GoogleComputeRegionBackendBucketIamMember" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member google_compute_region_backend_bucket_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_backend_bucket_iam_member

googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  member: str,
  name: str,
  role: str,
  condition: GoogleComputeRegionBackendBucketIamMemberCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#member GoogleComputeRegionBackendBucketIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#name GoogleComputeRegionBackendBucketIamMember#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#role GoogleComputeRegionBackendBucketIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberCondition">GoogleComputeRegionBackendBucketIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#id GoogleComputeRegionBackendBucketIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#project GoogleComputeRegionBackendBucketIamMember#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#region GoogleComputeRegionBackendBucketIamMember#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#member GoogleComputeRegionBackendBucketIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#name GoogleComputeRegionBackendBucketIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#role GoogleComputeRegionBackendBucketIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberCondition">GoogleComputeRegionBackendBucketIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#condition GoogleComputeRegionBackendBucketIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#id GoogleComputeRegionBackendBucketIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#project GoogleComputeRegionBackendBucketIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#region GoogleComputeRegionBackendBucketIamMember#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#expression GoogleComputeRegionBackendBucketIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#title GoogleComputeRegionBackendBucketIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#description GoogleComputeRegionBackendBucketIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleComputeRegionBackendBucketIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_compute_region_backend_bucket_iam_member

googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_compute_region_backend_bucket_iam_member

googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_compute_region_backend_bucket_iam_member

googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_compute_region_backend_bucket_iam_member

googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleComputeRegionBackendBucketIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeRegionBackendBucketIamMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeRegionBackendBucketIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionBackendBucketIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference">GoogleComputeRegionBackendBucketIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberCondition">GoogleComputeRegionBackendBucketIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.condition"></a>

```python
condition: GoogleComputeRegionBackendBucketIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference">GoogleComputeRegionBackendBucketIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.conditionInput"></a>

```python
condition_input: GoogleComputeRegionBackendBucketIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberCondition">GoogleComputeRegionBackendBucketIamMemberCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionBackendBucketIamMemberCondition <a name="GoogleComputeRegionBackendBucketIamMemberCondition" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberCondition.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_backend_bucket_iam_member

googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#expression GoogleComputeRegionBackendBucketIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#title GoogleComputeRegionBackendBucketIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#description GoogleComputeRegionBackendBucketIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#expression GoogleComputeRegionBackendBucketIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#title GoogleComputeRegionBackendBucketIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#description GoogleComputeRegionBackendBucketIamMember#description}.

---

### GoogleComputeRegionBackendBucketIamMemberConfig <a name="GoogleComputeRegionBackendBucketIamMemberConfig" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_backend_bucket_iam_member

googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  member: str,
  name: str,
  role: str,
  condition: GoogleComputeRegionBackendBucketIamMemberCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#member GoogleComputeRegionBackendBucketIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#name GoogleComputeRegionBackendBucketIamMember#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#role GoogleComputeRegionBackendBucketIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberCondition">GoogleComputeRegionBackendBucketIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#id GoogleComputeRegionBackendBucketIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#project GoogleComputeRegionBackendBucketIamMember#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#region GoogleComputeRegionBackendBucketIamMember#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#member GoogleComputeRegionBackendBucketIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#name GoogleComputeRegionBackendBucketIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#role GoogleComputeRegionBackendBucketIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.condition"></a>

```python
condition: GoogleComputeRegionBackendBucketIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberCondition">GoogleComputeRegionBackendBucketIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#condition GoogleComputeRegionBackendBucketIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#id GoogleComputeRegionBackendBucketIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#project GoogleComputeRegionBackendBucketIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_region_backend_bucket_iam_member#region GoogleComputeRegionBackendBucketIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionBackendBucketIamMemberConditionOutputReference <a name="GoogleComputeRegionBackendBucketIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_backend_bucket_iam_member

googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberCondition">GoogleComputeRegionBackendBucketIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionBackendBucketIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionBackendBucketIamMember.GoogleComputeRegionBackendBucketIamMemberCondition">GoogleComputeRegionBackendBucketIamMemberCondition</a>

---



