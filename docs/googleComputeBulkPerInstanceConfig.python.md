# `googleComputeBulkPerInstanceConfig` Submodule <a name="`googleComputeBulkPerInstanceConfig` Submodule" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeBulkPerInstanceConfig <a name="GoogleComputeBulkPerInstanceConfig" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config google_compute_bulk_per_instance_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_bulk_per_instance_config

googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_group_manager: str,
  deletion_policy: str = None,
  id: str = None,
  instances: IResolvable | typing.List[GoogleComputeBulkPerInstanceConfigInstances] = None,
  project: str = None,
  timeouts: GoogleComputeBulkPerInstanceConfigTimeouts = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.instanceGroupManager">instance_group_manager</a></code> | <code>str</code> | The instance group manager this instance config is part of. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#id GoogleComputeBulkPerInstanceConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.instances">instances</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a>]</code> | instances block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#project GoogleComputeBulkPerInstanceConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts">GoogleComputeBulkPerInstanceConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Zone where the containing instance group manager is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_group_manager`<sup>Required</sup> <a name="instance_group_manager" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.instanceGroupManager"></a>

- *Type:* str

The instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#instance_group_manager GoogleComputeBulkPerInstanceConfig#instance_group_manager}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#deletion_policy GoogleComputeBulkPerInstanceConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#id GoogleComputeBulkPerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.instances"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a>]

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#instances GoogleComputeBulkPerInstanceConfig#instances}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#project GoogleComputeBulkPerInstanceConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts">GoogleComputeBulkPerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#timeouts GoogleComputeBulkPerInstanceConfig#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.Initializer.parameter.zone"></a>

- *Type:* str

Zone where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#zone GoogleComputeBulkPerInstanceConfig#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.putInstances">put_instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetInstances">reset_instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_instances` <a name="put_instances" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.putInstances"></a>

```python
def put_instances(
  value: IResolvable | typing.List[GoogleComputeBulkPerInstanceConfigInstances]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.putInstances.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#create GoogleComputeBulkPerInstanceConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#delete GoogleComputeBulkPerInstanceConfig#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instances` <a name="reset_instances" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetInstances"></a>

```python
def reset_instances() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleComputeBulkPerInstanceConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_compute_bulk_per_instance_config

googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_compute_bulk_per_instance_config

googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_compute_bulk_per_instance_config

googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_compute_bulk_per_instance_config

googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleComputeBulkPerInstanceConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeBulkPerInstanceConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeBulkPerInstanceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeBulkPerInstanceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.instances">instances</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList">GoogleComputeBulkPerInstanceConfigInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference">GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.instanceGroupManagerInput">instance_group_manager_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.instancesInput">instances_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts">GoogleComputeBulkPerInstanceConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.instanceGroupManager">instance_group_manager</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.instances"></a>

```python
instances: GoogleComputeBulkPerInstanceConfigInstancesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList">GoogleComputeBulkPerInstanceConfigInstancesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference">GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_group_manager_input`<sup>Optional</sup> <a name="instance_group_manager_input" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.instanceGroupManagerInput"></a>

```python
instance_group_manager_input: str
```

- *Type:* str

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.instancesInput"></a>

```python
instances_input: IResolvable | typing.List[GoogleComputeBulkPerInstanceConfigInstances]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a>]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleComputeBulkPerInstanceConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts">GoogleComputeBulkPerInstanceConfigTimeouts</a>

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_group_manager`<sup>Required</sup> <a name="instance_group_manager" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.instanceGroupManager"></a>

```python
instance_group_manager: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeBulkPerInstanceConfigConfig <a name="GoogleComputeBulkPerInstanceConfigConfig" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_bulk_per_instance_config

googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_group_manager: str,
  deletion_policy: str = None,
  id: str = None,
  instances: IResolvable | typing.List[GoogleComputeBulkPerInstanceConfigInstances] = None,
  project: str = None,
  timeouts: GoogleComputeBulkPerInstanceConfigTimeouts = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.instanceGroupManager">instance_group_manager</a></code> | <code>str</code> | The instance group manager this instance config is part of. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#id GoogleComputeBulkPerInstanceConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.instances">instances</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a>]</code> | instances block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#project GoogleComputeBulkPerInstanceConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts">GoogleComputeBulkPerInstanceConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.zone">zone</a></code> | <code>str</code> | Zone where the containing instance group manager is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_group_manager`<sup>Required</sup> <a name="instance_group_manager" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.instanceGroupManager"></a>

```python
instance_group_manager: str
```

- *Type:* str

The instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#instance_group_manager GoogleComputeBulkPerInstanceConfig#instance_group_manager}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#deletion_policy GoogleComputeBulkPerInstanceConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#id GoogleComputeBulkPerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.instances"></a>

```python
instances: IResolvable | typing.List[GoogleComputeBulkPerInstanceConfigInstances]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a>]

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#instances GoogleComputeBulkPerInstanceConfig#instances}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#project GoogleComputeBulkPerInstanceConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeBulkPerInstanceConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts">GoogleComputeBulkPerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#timeouts GoogleComputeBulkPerInstanceConfig#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Zone where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#zone GoogleComputeBulkPerInstanceConfig#zone}

---

### GoogleComputeBulkPerInstanceConfigInstances <a name="GoogleComputeBulkPerInstanceConfigInstances" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_bulk_per_instance_config

googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances.property.name">name</a></code> | <code>str</code> | The name for this per-instance config and its corresponding instance. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances.property.name"></a>

```python
name: str
```

- *Type:* str

The name for this per-instance config and its corresponding instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#name GoogleComputeBulkPerInstanceConfig#name}

---

### GoogleComputeBulkPerInstanceConfigTimeouts <a name="GoogleComputeBulkPerInstanceConfigTimeouts" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_bulk_per_instance_config

googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#create GoogleComputeBulkPerInstanceConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#delete GoogleComputeBulkPerInstanceConfig#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#create GoogleComputeBulkPerInstanceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_compute_bulk_per_instance_config#delete GoogleComputeBulkPerInstanceConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeBulkPerInstanceConfigInstancesList <a name="GoogleComputeBulkPerInstanceConfigInstancesList" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_bulk_per_instance_config

googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeBulkPerInstanceConfigInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleComputeBulkPerInstanceConfigInstances]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a>]

---


### GoogleComputeBulkPerInstanceConfigInstancesOutputReference <a name="GoogleComputeBulkPerInstanceConfigInstancesOutputReference" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_bulk_per_instance_config

googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstancesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleComputeBulkPerInstanceConfigInstances
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigInstances">GoogleComputeBulkPerInstanceConfigInstances</a>

---


### GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference <a name="GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_bulk_per_instance_config

googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts">GoogleComputeBulkPerInstanceConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleComputeBulkPerInstanceConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBulkPerInstanceConfig.GoogleComputeBulkPerInstanceConfigTimeouts">GoogleComputeBulkPerInstanceConfigTimeouts</a>

---



