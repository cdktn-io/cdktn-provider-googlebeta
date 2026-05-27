# `dataGoogleComputeRegionInstanceGroupManager` Submodule <a name="`dataGoogleComputeRegionInstanceGroupManager` Submodule" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRegionInstanceGroupManager <a name="DataGoogleComputeRegionInstanceGroupManager" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_instance_group_manager google_compute_region_instance_group_manager}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager(
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
  name: str = None,
  project: str = None,
  region: str = None,
  self_link: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_instance_group_manager#id DataGoogleComputeRegionInstanceGroupManager#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the instance group manager. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.region">region</a></code> | <code>str</code> | The region where the managed instance group resides. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.selfLink">self_link</a></code> | <code>str</code> | The URL of the created resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_instance_group_manager#id DataGoogleComputeRegionInstanceGroupManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.name"></a>

- *Type:* str

The name of the instance group manager.

Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_instance_group_manager#name DataGoogleComputeRegionInstanceGroupManager#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_instance_group_manager#project DataGoogleComputeRegionInstanceGroupManager#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.region"></a>

- *Type:* str

The region where the managed instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_instance_group_manager#region DataGoogleComputeRegionInstanceGroupManager#region}

---

##### `self_link`<sup>Optional</sup> <a name="self_link" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.selfLink"></a>

- *Type:* str

The URL of the created resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_instance_group_manager#self_link DataGoogleComputeRegionInstanceGroupManager#self_link}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetSelfLink">reset_self_link</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_self_link` <a name="reset_self_link" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetSelfLink"></a>

```python
def reset_self_link() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleComputeRegionInstanceGroupManager resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isConstruct"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isTerraformDataSource"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleComputeRegionInstanceGroupManager resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeRegionInstanceGroupManager to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeRegionInstanceGroupManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_instance_group_manager#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRegionInstanceGroupManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.allInstancesConfig">all_instances_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList">DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.autoHealingPolicies">auto_healing_policies</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList">DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.baseInstanceName">base_instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.distributionPolicyTargetShape">distribution_policy_target_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.distributionPolicyZones">distribution_policy_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.instanceFlexibilityPolicy">instance_flexibility_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.instanceGroup">instance_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.instanceGroupManagerId">instance_group_manager_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.instanceLifecyclePolicy">instance_lifecycle_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList">DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.listManagedInstancesResults">list_managed_instances_results</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.namedPort">named_port</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList">DataGoogleComputeRegionInstanceGroupManagerNamedPortList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList">DataGoogleComputeRegionInstanceGroupManagerParamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.resourcePolicies">resource_policies</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList">DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.standbyPolicy">standby_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList">DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.statefulDisk">stateful_disk</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList">DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.statefulExternalIp">stateful_external_ip</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList">DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.statefulInternalIp">stateful_internal_ip</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList">DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.status">status</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList">DataGoogleComputeRegionInstanceGroupManagerStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetPools">target_pools</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetSize">target_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetSizePolicy">target_size_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList">DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetStoppedSize">target_stopped_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetSuspendedSize">target_suspended_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.updatePolicy">update_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList">DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.version">version</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList">DataGoogleComputeRegionInstanceGroupManagerVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.waitForInstances">wait_for_instances</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.waitForInstancesStatus">wait_for_instances_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.selfLinkInput">self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `all_instances_config`<sup>Required</sup> <a name="all_instances_config" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.allInstancesConfig"></a>

```python
all_instances_config: DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList">DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList</a>

---

##### `auto_healing_policies`<sup>Required</sup> <a name="auto_healing_policies" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.autoHealingPolicies"></a>

```python
auto_healing_policies: DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList">DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList</a>

---

##### `base_instance_name`<sup>Required</sup> <a name="base_instance_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.baseInstanceName"></a>

```python
base_instance_name: str
```

- *Type:* str

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `distribution_policy_target_shape`<sup>Required</sup> <a name="distribution_policy_target_shape" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.distributionPolicyTargetShape"></a>

```python
distribution_policy_target_shape: str
```

- *Type:* str

---

##### `distribution_policy_zones`<sup>Required</sup> <a name="distribution_policy_zones" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.distributionPolicyZones"></a>

```python
distribution_policy_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `instance_flexibility_policy`<sup>Required</sup> <a name="instance_flexibility_policy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.instanceFlexibilityPolicy"></a>

```python
instance_flexibility_policy: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList</a>

---

##### `instance_group`<sup>Required</sup> <a name="instance_group" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.instanceGroup"></a>

```python
instance_group: str
```

- *Type:* str

---

##### `instance_group_manager_id`<sup>Required</sup> <a name="instance_group_manager_id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.instanceGroupManagerId"></a>

```python
instance_group_manager_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_lifecycle_policy`<sup>Required</sup> <a name="instance_lifecycle_policy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.instanceLifecyclePolicy"></a>

```python
instance_lifecycle_policy: DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList">DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList</a>

---

##### `list_managed_instances_results`<sup>Required</sup> <a name="list_managed_instances_results" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.listManagedInstancesResults"></a>

```python
list_managed_instances_results: str
```

- *Type:* str

---

##### `named_port`<sup>Required</sup> <a name="named_port" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.namedPort"></a>

```python
named_port: DataGoogleComputeRegionInstanceGroupManagerNamedPortList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList">DataGoogleComputeRegionInstanceGroupManagerNamedPortList</a>

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.params"></a>

```python
params: DataGoogleComputeRegionInstanceGroupManagerParamsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList">DataGoogleComputeRegionInstanceGroupManagerParamsList</a>

---

##### `resource_policies`<sup>Required</sup> <a name="resource_policies" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.resourcePolicies"></a>

```python
resource_policies: DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList">DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList</a>

---

##### `standby_policy`<sup>Required</sup> <a name="standby_policy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.standbyPolicy"></a>

```python
standby_policy: DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList">DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList</a>

---

##### `stateful_disk`<sup>Required</sup> <a name="stateful_disk" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.statefulDisk"></a>

```python
stateful_disk: DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList">DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList</a>

---

##### `stateful_external_ip`<sup>Required</sup> <a name="stateful_external_ip" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.statefulExternalIp"></a>

```python
stateful_external_ip: DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList">DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList</a>

---

##### `stateful_internal_ip`<sup>Required</sup> <a name="stateful_internal_ip" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.statefulInternalIp"></a>

```python
stateful_internal_ip: DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList">DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.status"></a>

```python
status: DataGoogleComputeRegionInstanceGroupManagerStatusList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList">DataGoogleComputeRegionInstanceGroupManagerStatusList</a>

---

##### `target_pools`<sup>Required</sup> <a name="target_pools" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetPools"></a>

```python
target_pools: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_size`<sup>Required</sup> <a name="target_size" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetSize"></a>

```python
target_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_size_policy`<sup>Required</sup> <a name="target_size_policy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetSizePolicy"></a>

```python
target_size_policy: DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList">DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList</a>

---

##### `target_stopped_size`<sup>Required</sup> <a name="target_stopped_size" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetStoppedSize"></a>

```python
target_stopped_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_suspended_size`<sup>Required</sup> <a name="target_suspended_size" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetSuspendedSize"></a>

```python
target_suspended_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `update_policy`<sup>Required</sup> <a name="update_policy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.updatePolicy"></a>

```python
update_policy: DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList">DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.version"></a>

```python
version: DataGoogleComputeRegionInstanceGroupManagerVersionList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList">DataGoogleComputeRegionInstanceGroupManagerVersionList</a>

---

##### `wait_for_instances`<sup>Required</sup> <a name="wait_for_instances" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.waitForInstances"></a>

```python
wait_for_instances: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `wait_for_instances_status`<sup>Required</sup> <a name="wait_for_instances_status" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.waitForInstancesStatus"></a>

```python
wait_for_instances_status: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `self_link_input`<sup>Optional</sup> <a name="self_link_input" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.selfLinkInput"></a>

```python
self_link_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig <a name="DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig()
```


### DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies <a name="DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies()
```


### DataGoogleComputeRegionInstanceGroupManagerConfig <a name="DataGoogleComputeRegionInstanceGroupManagerConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  name: str = None,
  project: str = None,
  region: str = None,
  self_link: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_instance_group_manager#id DataGoogleComputeRegionInstanceGroupManager#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.name">name</a></code> | <code>str</code> | The name of the instance group manager. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.region">region</a></code> | <code>str</code> | The region where the managed instance group resides. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.selfLink">self_link</a></code> | <code>str</code> | The URL of the created resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_instance_group_manager#id DataGoogleComputeRegionInstanceGroupManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the instance group manager.

Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_instance_group_manager#name DataGoogleComputeRegionInstanceGroupManager#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_instance_group_manager#project DataGoogleComputeRegionInstanceGroupManager#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region where the managed instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_instance_group_manager#region DataGoogleComputeRegionInstanceGroupManager#region}

---

##### `self_link`<sup>Optional</sup> <a name="self_link" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

The URL of the created resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_instance_group_manager#self_link DataGoogleComputeRegionInstanceGroupManager#self_link}

---

### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy()
```


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections()
```


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisks <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisks" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisks.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisks()
```


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKey <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKey.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKey()
```


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabels <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabels" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabels.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabels()
```


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTags <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTags" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTags.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTags()
```


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKey <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKey.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKey()
```


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKey <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKey.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKey()
```


### DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy()
```


### DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair()
```


### DataGoogleComputeRegionInstanceGroupManagerNamedPort <a name="DataGoogleComputeRegionInstanceGroupManagerNamedPort" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPort.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPort()
```


### DataGoogleComputeRegionInstanceGroupManagerParams <a name="DataGoogleComputeRegionInstanceGroupManagerParams" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParams.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParams()
```


### DataGoogleComputeRegionInstanceGroupManagerResourcePolicies <a name="DataGoogleComputeRegionInstanceGroupManagerResourcePolicies" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePolicies.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePolicies()
```


### DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy <a name="DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy()
```


### DataGoogleComputeRegionInstanceGroupManagerStatefulDisk <a name="DataGoogleComputeRegionInstanceGroupManagerStatefulDisk" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDisk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDisk.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDisk()
```


### DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp <a name="DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp()
```


### DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp <a name="DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp()
```


### DataGoogleComputeRegionInstanceGroupManagerStatus <a name="DataGoogleComputeRegionInstanceGroupManagerStatus" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatus.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatus()
```


### DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig <a name="DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig()
```


### DataGoogleComputeRegionInstanceGroupManagerStatusStateful <a name="DataGoogleComputeRegionInstanceGroupManagerStatusStateful" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStateful"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStateful.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStateful()
```


### DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs <a name="DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs()
```


### DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget <a name="DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget()
```


### DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy <a name="DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy()
```


### DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy <a name="DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy()
```


### DataGoogleComputeRegionInstanceGroupManagerVersion <a name="DataGoogleComputeRegionInstanceGroupManagerVersion" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersion.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersion()
```


### DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize <a name="DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList <a name="DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata">metadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig">DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktn.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig">DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig</a>

---


### DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList <a name="DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck">health_check</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec">initial_delay_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies">DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck"></a>

```python
health_check: str
```

- *Type:* str

---

##### `initial_delay_sec`<sup>Required</sup> <a name="initial_delay_sec" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec"></a>

```python
initial_delay_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies">DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies</a>

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKey">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `rsa_encrypted_key`<sup>Required</sup> <a name="rsa_encrypted_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKey">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKey</a>

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabels">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabels
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabels">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabels</a>

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.autoDelete">auto_delete</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.boot">boot</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.diskEncryptionKey">disk_encryption_key</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.diskName">disk_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.guestOsFeatures">guest_os_features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.interface">interface</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.provisionedIops">provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.provisionedThroughput">provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.resourceManagerTags">resource_manager_tags</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.sourceImage">source_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.sourceImageEncryptionKey">source_image_encryption_key</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisks">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `auto_delete`<sup>Required</sup> <a name="auto_delete" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.autoDelete"></a>

```python
auto_delete: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `boot`<sup>Required</sup> <a name="boot" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.boot"></a>

```python
boot: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `disk_encryption_key`<sup>Required</sup> <a name="disk_encryption_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.diskEncryptionKey"></a>

```python
disk_encryption_key: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksDiskEncryptionKeyList</a>

---

##### `disk_name`<sup>Required</sup> <a name="disk_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.diskName"></a>

```python
disk_name: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `guest_os_features`<sup>Required</sup> <a name="guest_os_features" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.guestOsFeatures"></a>

```python
guest_os_features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.interface"></a>

```python
interface: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.labels"></a>

```python
labels: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksLabelsList</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `provisioned_iops`<sup>Required</sup> <a name="provisioned_iops" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.provisionedIops"></a>

```python
provisioned_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_throughput`<sup>Required</sup> <a name="provisioned_throughput" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.provisionedThroughput"></a>

```python
provisioned_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_manager_tags`<sup>Required</sup> <a name="resource_manager_tags" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.resourceManagerTags"></a>

```python
resource_manager_tags: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList</a>

---

##### `resource_policies`<sup>Required</sup> <a name="resource_policies" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.resourcePolicies"></a>

```python
resource_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_image`<sup>Required</sup> <a name="source_image" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.sourceImage"></a>

```python
source_image: str
```

- *Type:* str

---

##### `source_image_encryption_key`<sup>Required</sup> <a name="source_image_encryption_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.sourceImageEncryptionKey"></a>

```python
source_image_encryption_key: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList</a>

---

##### `source_snapshot`<sup>Required</sup> <a name="source_snapshot" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

---

##### `source_snapshot_encryption_key`<sup>Required</sup> <a name="source_snapshot_encryption_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.sourceSnapshotEncryptionKey"></a>

```python
source_snapshot_encryption_key: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisks
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisks">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisks</a>

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTags">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTags
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTags">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksResourceManagerTags</a>

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKey">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `rsa_encrypted_key`<sup>Required</sup> <a name="rsa_encrypted_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKey">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceImageEncryptionKey</a>

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKey">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `rsa_encrypted_key`<sup>Required</sup> <a name="rsa_encrypted_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKey">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksSourceSnapshotEncryptionKey</a>

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.disks">disks</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.machineTypes">machine_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.minCpuPlatform">min_cpu_platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.rank">rank</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disks`<sup>Required</sup> <a name="disks" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.disks"></a>

```python
disks: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsDisksList</a>

---

##### `machine_types`<sup>Required</sup> <a name="machine_types" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.machineTypes"></a>

```python
machine_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `min_cpu_platform`<sup>Required</sup> <a name="min_cpu_platform" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.minCpuPlatform"></a>

```python
min_cpu_platform: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rank`<sup>Required</sup> <a name="rank" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.rank"></a>

```python
rank: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections</a>

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.instanceSelections">instance_selections</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_selections`<sup>Required</sup> <a name="instance_selections" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.instanceSelections"></a>

```python
instance_selections: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy</a>

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.allowChangingZone">allow_changing_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair">DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_changing_zone`<sup>Required</sup> <a name="allow_changing_zone" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.allowChangingZone"></a>

```python
allow_changing_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair">DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair</a>

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure">default_action_on_failure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair">force_update_on_repair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onFailedHealthCheck">on_failed_health_check</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onRepair">on_repair</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList">DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy">DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_action_on_failure`<sup>Required</sup> <a name="default_action_on_failure" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure"></a>

```python
default_action_on_failure: str
```

- *Type:* str

---

##### `force_update_on_repair`<sup>Required</sup> <a name="force_update_on_repair" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair"></a>

```python
force_update_on_repair: str
```

- *Type:* str

---

##### `on_failed_health_check`<sup>Required</sup> <a name="on_failed_health_check" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onFailedHealthCheck"></a>

```python
on_failed_health_check: str
```

- *Type:* str

---

##### `on_repair`<sup>Required</sup> <a name="on_repair" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onRepair"></a>

```python
on_repair: DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList">DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy">DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy</a>

---


### DataGoogleComputeRegionInstanceGroupManagerNamedPortList <a name="DataGoogleComputeRegionInstanceGroupManagerNamedPortList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPort">DataGoogleComputeRegionInstanceGroupManagerNamedPort</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerNamedPort
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPort">DataGoogleComputeRegionInstanceGroupManagerNamedPort</a>

---


### DataGoogleComputeRegionInstanceGroupManagerParamsList <a name="DataGoogleComputeRegionInstanceGroupManagerParamsList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.property.resourceManagerTags">resource_manager_tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParams">DataGoogleComputeRegionInstanceGroupManagerParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_manager_tags`<sup>Required</sup> <a name="resource_manager_tags" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.property.resourceManagerTags"></a>

```python
resource_manager_tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParamsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerParams
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerParams">DataGoogleComputeRegionInstanceGroupManagerParams</a>

---


### DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList <a name="DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.property.workloadPolicy">workload_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePolicies">DataGoogleComputeRegionInstanceGroupManagerResourcePolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workload_policy`<sup>Required</sup> <a name="workload_policy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.property.workloadPolicy"></a>

```python
workload_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerResourcePolicies
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePolicies">DataGoogleComputeRegionInstanceGroupManagerResourcePolicies</a>

---


### DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList <a name="DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySec">initial_delay_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy">DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `initial_delay_sec`<sup>Required</sup> <a name="initial_delay_sec" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySec"></a>

```python
initial_delay_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy">DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy</a>

---


### DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList <a name="DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule">delete_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDisk">DataGoogleComputeRegionInstanceGroupManagerStatefulDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_rule`<sup>Required</sup> <a name="delete_rule" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule"></a>

```python
delete_rule: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerStatefulDisk
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDisk">DataGoogleComputeRegionInstanceGroupManagerStatefulDisk</a>

---


### DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList <a name="DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule">delete_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName">interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp">DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_rule`<sup>Required</sup> <a name="delete_rule" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule"></a>

```python
delete_rule: str
```

- *Type:* str

---

##### `interface_name`<sup>Required</sup> <a name="interface_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName"></a>

```python
interface_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp">DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp</a>

---


### DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList <a name="DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule">delete_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName">interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp">DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_rule`<sup>Required</sup> <a name="delete_rule" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule"></a>

```python
delete_rule: str
```

- *Type:* str

---

##### `interface_name`<sup>Required</sup> <a name="interface_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName"></a>

```python
interface_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp">DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp</a>

---


### DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList <a name="DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision">current_revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective">effective</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig">DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_revision`<sup>Required</sup> <a name="current_revision" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision"></a>

```python
current_revision: str
```

- *Type:* str

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective"></a>

```python
effective: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig">DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig</a>

---


### DataGoogleComputeRegionInstanceGroupManagerStatusList <a name="DataGoogleComputeRegionInstanceGroupManagerStatusList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.allInstancesConfig">all_instances_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList">DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.isStable">is_stable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.stateful">stateful</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList">DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.versionTarget">version_target</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList">DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatus">DataGoogleComputeRegionInstanceGroupManagerStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_instances_config`<sup>Required</sup> <a name="all_instances_config" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.allInstancesConfig"></a>

```python
all_instances_config: DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList">DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList</a>

---

##### `is_stable`<sup>Required</sup> <a name="is_stable" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.isStable"></a>

```python
is_stable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `stateful`<sup>Required</sup> <a name="stateful" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.stateful"></a>

```python
stateful: DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList">DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList</a>

---

##### `version_target`<sup>Required</sup> <a name="version_target" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.versionTarget"></a>

```python
version_target: DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList">DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerStatus
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatus">DataGoogleComputeRegionInstanceGroupManagerStatus</a>

---


### DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList <a name="DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig">has_stateful_config</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs">per_instance_configs</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList">DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStateful">DataGoogleComputeRegionInstanceGroupManagerStatusStateful</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `has_stateful_config`<sup>Required</sup> <a name="has_stateful_config" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig"></a>

```python
has_stateful_config: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `per_instance_configs`<sup>Required</sup> <a name="per_instance_configs" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs"></a>

```python
per_instance_configs: DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList">DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerStatusStateful
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStateful">DataGoogleComputeRegionInstanceGroupManagerStatusStateful</a>

---


### DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList <a name="DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective">all_effective</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs">DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_effective`<sup>Required</sup> <a name="all_effective" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective"></a>

```python
all_effective: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs">DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs</a>

---


### DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList <a name="DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached">is_reached</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget">DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_reached`<sup>Required</sup> <a name="is_reached" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached"></a>

```python
is_reached: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget">DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget</a>

---


### DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList <a name="DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy">DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy">DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy</a>

---


### DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList <a name="DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionType">instance_redistribution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed">max_surge_fixed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent">max_surge_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed">max_unavailable_fixed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent">max_unavailable_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction">minimal_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySec">min_ready_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction">most_disruptive_allowed_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod">replacement_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy">DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_redistribution_type`<sup>Required</sup> <a name="instance_redistribution_type" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionType"></a>

```python
instance_redistribution_type: str
```

- *Type:* str

---

##### `max_surge_fixed`<sup>Required</sup> <a name="max_surge_fixed" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed"></a>

```python
max_surge_fixed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_surge_percent`<sup>Required</sup> <a name="max_surge_percent" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent"></a>

```python
max_surge_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_unavailable_fixed`<sup>Required</sup> <a name="max_unavailable_fixed" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed"></a>

```python
max_unavailable_fixed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_unavailable_percent`<sup>Required</sup> <a name="max_unavailable_percent" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent"></a>

```python
max_unavailable_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimal_action`<sup>Required</sup> <a name="minimal_action" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction"></a>

```python
minimal_action: str
```

- *Type:* str

---

##### `min_ready_sec`<sup>Required</sup> <a name="min_ready_sec" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySec"></a>

```python
min_ready_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `most_disruptive_allowed_action`<sup>Required</sup> <a name="most_disruptive_allowed_action" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction"></a>

```python
most_disruptive_allowed_action: str
```

- *Type:* str

---

##### `replacement_method`<sup>Required</sup> <a name="replacement_method" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod"></a>

```python
replacement_method: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy">DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy</a>

---


### DataGoogleComputeRegionInstanceGroupManagerVersionList <a name="DataGoogleComputeRegionInstanceGroupManagerVersionList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplate">instance_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSize">target_size</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList">DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersion">DataGoogleComputeRegionInstanceGroupManagerVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_template`<sup>Required</sup> <a name="instance_template" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplate"></a>

```python
instance_template: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `target_size`<sup>Required</sup> <a name="target_size" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSize"></a>

```python
target_size: DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList">DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerVersion
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersion">DataGoogleComputeRegionInstanceGroupManagerVersion</a>

---


### DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList <a name="DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_group_manager

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed">fixed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percent">percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize">DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed"></a>

```python
fixed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percent"></a>

```python
percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize">DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize</a>

---



