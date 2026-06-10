# `dataGoogleComputeRegionInstanceTemplate` Submodule <a name="`dataGoogleComputeRegionInstanceTemplate` Submodule" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRegionInstanceTemplate <a name="DataGoogleComputeRegionInstanceTemplate" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template google_compute_region_instance_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: str = None,
  id: str = None,
  most_recent: bool | IResolvable = None,
  name: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template#filter DataGoogleComputeRegionInstanceTemplate#filter}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template#id DataGoogleComputeRegionInstanceTemplate#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.mostRecent">most_recent</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template#most_recent DataGoogleComputeRegionInstanceTemplate#most_recent}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.region">region</a></code> | <code>str</code> | The region in which the instance template is located. If it is not provided, the provider region is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.filter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template#filter DataGoogleComputeRegionInstanceTemplate#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template#id DataGoogleComputeRegionInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `most_recent`<sup>Optional</sup> <a name="most_recent" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.mostRecent"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template#most_recent DataGoogleComputeRegionInstanceTemplate#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.name"></a>

- *Type:* str

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template#name DataGoogleComputeRegionInstanceTemplate#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template#project DataGoogleComputeRegionInstanceTemplate#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.region"></a>

- *Type:* str

The region in which the instance template is located. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template#region DataGoogleComputeRegionInstanceTemplate#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetMostRecent">reset_most_recent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_most_recent` <a name="reset_most_recent" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetMostRecent"></a>

```python
def reset_most_recent() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleComputeRegionInstanceTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.isConstruct"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.isTerraformDataSource"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleComputeRegionInstanceTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeRegionInstanceTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeRegionInstanceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRegionInstanceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.advancedMachineFeatures">advanced_machine_features</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList">DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.canIpForward">can_ip_forward</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.confidentialInstanceConfig">confidential_instance_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList">DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.disk">disk</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList">DataGoogleComputeRegionInstanceTemplateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.enableDisplay">enable_display</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.guestAccelerator">guest_accelerator</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList">DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.instanceDescription">instance_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.keyRevocationActionType">key_revocation_action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.metadata">metadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.metadataFingerprint">metadata_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.metadataStartupScript">metadata_startup_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.minCpuPlatform">min_cpu_platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.networkPerformanceConfig">network_performance_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList">DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.numericId">numeric_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.partnerMetadata">partner_metadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList">DataGoogleComputeRegionInstanceTemplateReservationAffinityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.resourceManagerTags">resource_manager_tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.scheduling">scheduling</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList">DataGoogleComputeRegionInstanceTemplateSchedulingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.serviceAccount">service_account</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList">DataGoogleComputeRegionInstanceTemplateServiceAccountList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList">DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.tagsFingerprint">tags_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.mostRecentInput">most_recent_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.mostRecent">most_recent</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `advanced_machine_features`<sup>Required</sup> <a name="advanced_machine_features" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.advancedMachineFeatures"></a>

```python
advanced_machine_features: DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList">DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList</a>

---

##### `can_ip_forward`<sup>Required</sup> <a name="can_ip_forward" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.canIpForward"></a>

```python
can_ip_forward: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `confidential_instance_config`<sup>Required</sup> <a name="confidential_instance_config" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.confidentialInstanceConfig"></a>

```python
confidential_instance_config: DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList">DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.disk"></a>

```python
disk: DataGoogleComputeRegionInstanceTemplateDiskList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList">DataGoogleComputeRegionInstanceTemplateDiskList</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `enable_display`<sup>Required</sup> <a name="enable_display" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.enableDisplay"></a>

```python
enable_display: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `guest_accelerator`<sup>Required</sup> <a name="guest_accelerator" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.guestAccelerator"></a>

```python
guest_accelerator: DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList">DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList</a>

---

##### `instance_description`<sup>Required</sup> <a name="instance_description" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.instanceDescription"></a>

```python
instance_description: str
```

- *Type:* str

---

##### `key_revocation_action_type`<sup>Required</sup> <a name="key_revocation_action_type" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.keyRevocationActionType"></a>

```python
key_revocation_action_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktn.StringMap

---

##### `metadata_fingerprint`<sup>Required</sup> <a name="metadata_fingerprint" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.metadataFingerprint"></a>

```python
metadata_fingerprint: str
```

- *Type:* str

---

##### `metadata_startup_script`<sup>Required</sup> <a name="metadata_startup_script" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.metadataStartupScript"></a>

```python
metadata_startup_script: str
```

- *Type:* str

---

##### `min_cpu_platform`<sup>Required</sup> <a name="min_cpu_platform" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.minCpuPlatform"></a>

```python
min_cpu_platform: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.networkInterface"></a>

```python
network_interface: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList</a>

---

##### `network_performance_config`<sup>Required</sup> <a name="network_performance_config" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.networkPerformanceConfig"></a>

```python
network_performance_config: DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList">DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList</a>

---

##### `numeric_id`<sup>Required</sup> <a name="numeric_id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.numericId"></a>

```python
numeric_id: str
```

- *Type:* str

---

##### `partner_metadata`<sup>Required</sup> <a name="partner_metadata" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.partnerMetadata"></a>

```python
partner_metadata: StringMap
```

- *Type:* cdktn.StringMap

---

##### `reservation_affinity`<sup>Required</sup> <a name="reservation_affinity" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.reservationAffinity"></a>

```python
reservation_affinity: DataGoogleComputeRegionInstanceTemplateReservationAffinityList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList">DataGoogleComputeRegionInstanceTemplateReservationAffinityList</a>

---

##### `resource_manager_tags`<sup>Required</sup> <a name="resource_manager_tags" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.resourceManagerTags"></a>

```python
resource_manager_tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `resource_policies`<sup>Required</sup> <a name="resource_policies" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.resourcePolicies"></a>

```python
resource_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.scheduling"></a>

```python
scheduling: DataGoogleComputeRegionInstanceTemplateSchedulingList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList">DataGoogleComputeRegionInstanceTemplateSchedulingList</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.serviceAccount"></a>

```python
service_account: DataGoogleComputeRegionInstanceTemplateServiceAccountList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList">DataGoogleComputeRegionInstanceTemplateServiceAccountList</a>

---

##### `shielded_instance_config`<sup>Required</sup> <a name="shielded_instance_config" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList">DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_fingerprint`<sup>Required</sup> <a name="tags_fingerprint" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.tagsFingerprint"></a>

```python
tags_fingerprint: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `most_recent_input`<sup>Optional</sup> <a name="most_recent_input" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.mostRecentInput"></a>

```python
most_recent_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `most_recent`<sup>Required</sup> <a name="most_recent" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.mostRecent"></a>

```python
most_recent: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures <a name="DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures()
```


### DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig <a name="DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig()
```


### DataGoogleComputeRegionInstanceTemplateConfig <a name="DataGoogleComputeRegionInstanceTemplateConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: str = None,
  id: str = None,
  most_recent: bool | IResolvable = None,
  name: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template#filter DataGoogleComputeRegionInstanceTemplate#filter}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template#id DataGoogleComputeRegionInstanceTemplate#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.mostRecent">most_recent</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template#most_recent DataGoogleComputeRegionInstanceTemplate#most_recent}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.name">name</a></code> | <code>str</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.region">region</a></code> | <code>str</code> | The region in which the instance template is located. If it is not provided, the provider region is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template#filter DataGoogleComputeRegionInstanceTemplate#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template#id DataGoogleComputeRegionInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `most_recent`<sup>Optional</sup> <a name="most_recent" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.mostRecent"></a>

```python
most_recent: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template#most_recent DataGoogleComputeRegionInstanceTemplate#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template#name DataGoogleComputeRegionInstanceTemplate#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template#project DataGoogleComputeRegionInstanceTemplate#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region in which the instance template is located. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_instance_template#region DataGoogleComputeRegionInstanceTemplate#region}

---

### DataGoogleComputeRegionInstanceTemplateDisk <a name="DataGoogleComputeRegionInstanceTemplateDisk" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDisk.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDisk()
```


### DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey <a name="DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey()
```


### DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey <a name="DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey()
```


### DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey <a name="DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey()
```


### DataGoogleComputeRegionInstanceTemplateGuestAccelerator <a name="DataGoogleComputeRegionInstanceTemplateGuestAccelerator" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAccelerator.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAccelerator()
```


### DataGoogleComputeRegionInstanceTemplateNetworkInterface <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterface" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterface.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterface()
```


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig()
```


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange()
```


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6Range <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6Range" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6Range"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6Range.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6Range()
```


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig()
```


### DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig <a name="DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig()
```


### DataGoogleComputeRegionInstanceTemplateReservationAffinity <a name="DataGoogleComputeRegionInstanceTemplateReservationAffinity" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinity.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinity()
```


### DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation <a name="DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation()
```


### DataGoogleComputeRegionInstanceTemplateScheduling <a name="DataGoogleComputeRegionInstanceTemplateScheduling" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateScheduling.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateScheduling()
```


### DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown <a name="DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown()
```


### DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration <a name="DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration()
```


### DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout <a name="DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout()
```


### DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration <a name="DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration()
```


### DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities <a name="DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities()
```


### DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction <a name="DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction()
```


### DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDuration <a name="DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDuration" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDuration.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDuration()
```


### DataGoogleComputeRegionInstanceTemplateServiceAccount <a name="DataGoogleComputeRegionInstanceTemplateServiceAccount" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccount.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccount()
```


### DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig <a name="DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList <a name="DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference <a name="DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">enable_nested_virtualization</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking">enable_uefi_networking</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit">performance_monitoring_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode">turbo_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">visible_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_nested_virtualization`<sup>Required</sup> <a name="enable_nested_virtualization" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```python
enable_nested_virtualization: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_uefi_networking`<sup>Required</sup> <a name="enable_uefi_networking" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking"></a>

```python
enable_uefi_networking: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `performance_monitoring_unit`<sup>Required</sup> <a name="performance_monitoring_unit" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit"></a>

```python
performance_monitoring_unit: str
```

- *Type:* str

---

##### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `turbo_mode`<sup>Required</sup> <a name="turbo_mode" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode"></a>

```python
turbo_mode: str
```

- *Type:* str

---

##### `visible_core_count`<sup>Required</sup> <a name="visible_core_count" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```python
visible_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

---


### DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList <a name="DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference <a name="DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType">confidential_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">enable_confidential_compute</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidential_instance_type`<sup>Required</sup> <a name="confidential_instance_type" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType"></a>

```python
confidential_instance_type: str
```

- *Type:* str

---

##### `enable_confidential_compute`<sup>Required</sup> <a name="enable_confidential_compute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```python
enable_confidential_compute: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

---


### DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList <a name="DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference <a name="DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey">DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey">DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey</a>

---


### DataGoogleComputeRegionInstanceTemplateDiskList <a name="DataGoogleComputeRegionInstanceTemplateDiskList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateDiskOutputReference <a name="DataGoogleComputeRegionInstanceTemplateDiskOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.autoDelete">auto_delete</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.boot">boot</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKey">disk_encryption_key</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList">DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskName">disk_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.guestOsFeatures">guest_os_features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.interface">interface</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIops">provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedThroughput">provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTags">resource_manager_tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImage">source_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey">source_image_encryption_key</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList">DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList">DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.storagePool">storage_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDisk">DataGoogleComputeRegionInstanceTemplateDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `auto_delete`<sup>Required</sup> <a name="auto_delete" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.autoDelete"></a>

```python
auto_delete: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `boot`<sup>Required</sup> <a name="boot" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.boot"></a>

```python
boot: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `disk_encryption_key`<sup>Required</sup> <a name="disk_encryption_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKey"></a>

```python
disk_encryption_key: DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList">DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList</a>

---

##### `disk_name`<sup>Required</sup> <a name="disk_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskName"></a>

```python
disk_name: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `guest_os_features`<sup>Required</sup> <a name="guest_os_features" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.guestOsFeatures"></a>

```python
guest_os_features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.interface"></a>

```python
interface: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `provisioned_iops`<sup>Required</sup> <a name="provisioned_iops" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIops"></a>

```python
provisioned_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_throughput`<sup>Required</sup> <a name="provisioned_throughput" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedThroughput"></a>

```python
provisioned_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_manager_tags`<sup>Required</sup> <a name="resource_manager_tags" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTags"></a>

```python
resource_manager_tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `resource_policies`<sup>Required</sup> <a name="resource_policies" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourcePolicies"></a>

```python
resource_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_image`<sup>Required</sup> <a name="source_image" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImage"></a>

```python
source_image: str
```

- *Type:* str

---

##### `source_image_encryption_key`<sup>Required</sup> <a name="source_image_encryption_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey"></a>

```python
source_image_encryption_key: DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList">DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList</a>

---

##### `source_snapshot`<sup>Required</sup> <a name="source_snapshot" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

---

##### `source_snapshot_encryption_key`<sup>Required</sup> <a name="source_snapshot_encryption_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey"></a>

```python
source_snapshot_encryption_key: DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList">DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList</a>

---

##### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.storagePool"></a>

```python
storage_pool: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateDisk
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDisk">DataGoogleComputeRegionInstanceTemplateDisk</a>

---


### DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList <a name="DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference <a name="DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `rsa_encrypted_key`<sup>Required</sup> <a name="rsa_encrypted_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a>

---


### DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList <a name="DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference <a name="DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `rsa_encrypted_key`<sup>Required</sup> <a name="rsa_encrypted_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---


### DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList <a name="DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference <a name="DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAccelerator">DataGoogleComputeRegionInstanceTemplateGuestAccelerator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateGuestAccelerator
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAccelerator">DataGoogleComputeRegionInstanceTemplateGuestAccelerator</a>

---


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp">nat_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier">network_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">public_ptr_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nat_ip`<sup>Required</sup> <a name="nat_ip" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```python
nat_ip: str
```

- *Type:* str

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

---

##### `public_ptr_domain_name`<sup>Required</sup> <a name="public_ptr_domain_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```python
public_ptr_domain_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a>

---


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">subnetwork_range_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

---

##### `subnetwork_range_name`<sup>Required</sup> <a name="subnetwork_range_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```python
subnetwork_range_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a>

---


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.property.subnetworkRangeName">subnetwork_range_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6Range">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6Range</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

---

##### `subnetwork_range_name`<sup>Required</sup> <a name="subnetwork_range_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.property.subnetworkRangeName"></a>

```python
subnetwork_range_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6Range
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6Range">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6Range</a>

---


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">external_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">external_ipv6_prefix_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">network_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">public_ptr_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_ipv6`<sup>Required</sup> <a name="external_ipv6" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```python
external_ipv6: str
```

- *Type:* str

---

##### `external_ipv6_prefix_length`<sup>Required</sup> <a name="external_ipv6_prefix_length" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```python
external_ipv6_prefix_length: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

---

##### `public_ptr_domain_name`<sup>Required</sup> <a name="public_ptr_domain_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```python
public_ptr_domain_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>

---


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig">access_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange">alias_ip_range</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpv6Range">alias_ipv6_range</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.igmpQuery">igmp_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">internal_ipv6_prefix_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig">ipv6_access_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType">ipv6_access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkAttachment">network_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIp">network_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicType">nic_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.parentNicName">parent_nic_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCount">queue_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackType">stack_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject">subnetwork_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterface">DataGoogleComputeRegionInstanceTemplateNetworkInterface</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_config`<sup>Required</sup> <a name="access_config" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig"></a>

```python
access_config: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList</a>

---

##### `alias_ip_range`<sup>Required</sup> <a name="alias_ip_range" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```python
alias_ip_range: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList</a>

---

##### `alias_ipv6_range`<sup>Required</sup> <a name="alias_ipv6_range" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpv6Range"></a>

```python
alias_ipv6_range: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpv6RangeList</a>

---

##### `igmp_query`<sup>Required</sup> <a name="igmp_query" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.igmpQuery"></a>

```python
igmp_query: str
```

- *Type:* str

---

##### `internal_ipv6_prefix_length`<sup>Required</sup> <a name="internal_ipv6_prefix_length" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```python
internal_ipv6_prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_access_config`<sup>Required</sup> <a name="ipv6_access_config" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```python
ipv6_access_config: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a>

---

##### `ipv6_access_type`<sup>Required</sup> <a name="ipv6_access_type" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```python
ipv6_access_type: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

---

##### `network_ip`<sup>Required</sup> <a name="network_ip" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIp"></a>

```python
network_ip: str
```

- *Type:* str

---

##### `nic_type`<sup>Required</sup> <a name="nic_type" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicType"></a>

```python
nic_type: str
```

- *Type:* str

---

##### `parent_nic_name`<sup>Required</sup> <a name="parent_nic_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.parentNicName"></a>

```python
parent_nic_name: str
```

- *Type:* str

---

##### `queue_count`<sup>Required</sup> <a name="queue_count" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCount"></a>

```python
queue_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stack_type`<sup>Required</sup> <a name="stack_type" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackType"></a>

```python
stack_type: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `subnetwork_project`<sup>Required</sup> <a name="subnetwork_project" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```python
subnetwork_project: str
```

- *Type:* str

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateNetworkInterface
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterface">DataGoogleComputeRegionInstanceTemplateNetworkInterface</a>

---


### DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList <a name="DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference <a name="DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">total_egress_bandwidth_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `total_egress_bandwidth_tier`<sup>Required</sup> <a name="total_egress_bandwidth_tier" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```python
total_egress_bandwidth_tier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

---


### DataGoogleComputeRegionInstanceTemplateReservationAffinityList <a name="DataGoogleComputeRegionInstanceTemplateReservationAffinityList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference <a name="DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservation">specific_reservation</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList">DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinity">DataGoogleComputeRegionInstanceTemplateReservationAffinity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `specific_reservation`<sup>Required</sup> <a name="specific_reservation" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservation"></a>

```python
specific_reservation: DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList">DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateReservationAffinity
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinity">DataGoogleComputeRegionInstanceTemplateReservationAffinity</a>

---


### DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList <a name="DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference <a name="DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation">DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation">DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a>

---


### DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList <a name="DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList <a name="DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference <a name="DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration">DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration">DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration</a>

---


### DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference <a name="DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.maxDuration">max_duration</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList">DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown">DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `max_duration`<sup>Required</sup> <a name="max_duration" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.maxDuration"></a>

```python
max_duration: DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList">DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown">DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown</a>

---


### DataGoogleComputeRegionInstanceTemplateSchedulingList <a name="DataGoogleComputeRegionInstanceTemplateSchedulingList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList <a name="DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>

---


### DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList <a name="DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference <a name="DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration">DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration">DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration</a>

---


### DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList <a name="DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference <a name="DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities">DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities">DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities</a>

---


### DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList <a name="DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference <a name="DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd">discard_local_ssd</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction">DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `discard_local_ssd`<sup>Required</sup> <a name="discard_local_ssd" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd"></a>

```python
discard_local_ssd: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction">DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction</a>

---


### DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference <a name="DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestart">automatic_restart</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.gracefulShutdown">graceful_shutdown</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList">DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSeconds">host_error_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction">instance_termination_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout">local_ssd_recovery_timeout</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maintenanceInterval">maintenance_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maxRunDuration">max_run_duration</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList">DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpus">min_node_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinities">node_affinities</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList">DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenance">on_host_maintenance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction">on_instance_stop_action</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList">DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptible">preemptible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptionNoticeDuration">preemption_notice_duration</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList">DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModel">provisioning_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.skipGuestOsShutdown">skip_guest_os_shutdown</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.terminationTime">termination_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateScheduling">DataGoogleComputeRegionInstanceTemplateScheduling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automatic_restart`<sup>Required</sup> <a name="automatic_restart" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestart"></a>

```python
automatic_restart: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.availabilityDomain"></a>

```python
availability_domain: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `graceful_shutdown`<sup>Required</sup> <a name="graceful_shutdown" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.gracefulShutdown"></a>

```python
graceful_shutdown: DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList">DataGoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownList</a>

---

##### `host_error_timeout_seconds`<sup>Required</sup> <a name="host_error_timeout_seconds" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSeconds"></a>

```python
host_error_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_termination_action`<sup>Required</sup> <a name="instance_termination_action" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction"></a>

```python
instance_termination_action: str
```

- *Type:* str

---

##### `local_ssd_recovery_timeout`<sup>Required</sup> <a name="local_ssd_recovery_timeout" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```python
local_ssd_recovery_timeout: DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a>

---

##### `maintenance_interval`<sup>Required</sup> <a name="maintenance_interval" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maintenanceInterval"></a>

```python
maintenance_interval: str
```

- *Type:* str

---

##### `max_run_duration`<sup>Required</sup> <a name="max_run_duration" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maxRunDuration"></a>

```python
max_run_duration: DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList">DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList</a>

---

##### `min_node_cpus`<sup>Required</sup> <a name="min_node_cpus" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpus"></a>

```python
min_node_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_affinities`<sup>Required</sup> <a name="node_affinities" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinities"></a>

```python
node_affinities: DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList">DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList</a>

---

##### `on_host_maintenance`<sup>Required</sup> <a name="on_host_maintenance" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenance"></a>

```python
on_host_maintenance: str
```

- *Type:* str

---

##### `on_instance_stop_action`<sup>Required</sup> <a name="on_instance_stop_action" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction"></a>

```python
on_instance_stop_action: DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList">DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList</a>

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptible"></a>

```python
preemptible: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `preemption_notice_duration`<sup>Required</sup> <a name="preemption_notice_duration" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptionNoticeDuration"></a>

```python
preemption_notice_duration: DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList">DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList</a>

---

##### `provisioning_model`<sup>Required</sup> <a name="provisioning_model" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModel"></a>

```python
provisioning_model: str
```

- *Type:* str

---

##### `skip_guest_os_shutdown`<sup>Required</sup> <a name="skip_guest_os_shutdown" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.skipGuestOsShutdown"></a>

```python
skip_guest_os_shutdown: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `termination_time`<sup>Required</sup> <a name="termination_time" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.terminationTime"></a>

```python
termination_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateScheduling
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateScheduling">DataGoogleComputeRegionInstanceTemplateScheduling</a>

---


### DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList <a name="DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference <a name="DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDuration">DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDurationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDuration
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDuration">DataGoogleComputeRegionInstanceTemplateSchedulingPreemptionNoticeDuration</a>

---


### DataGoogleComputeRegionInstanceTemplateServiceAccountList <a name="DataGoogleComputeRegionInstanceTemplateServiceAccountList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference <a name="DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccount">DataGoogleComputeRegionInstanceTemplateServiceAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateServiceAccount
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccount">DataGoogleComputeRegionInstanceTemplateServiceAccount</a>

---


### DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList <a name="DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference <a name="DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm">enable_vtpm</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig">DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_integrity_monitoring`<sup>Required</sup> <a name="enable_integrity_monitoring" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_vtpm`<sup>Required</sup> <a name="enable_vtpm" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```python
enable_vtpm: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig">DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a>

---



