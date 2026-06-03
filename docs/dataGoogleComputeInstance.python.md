# `dataGoogleComputeInstance` Submodule <a name="`dataGoogleComputeInstance` Submodule" id="@cdktn/provider-google-beta.dataGoogleComputeInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeInstance <a name="DataGoogleComputeInstance" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_instance google_compute_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstance(
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
  self_link: str = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_instance#id DataGoogleComputeInstance#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the instance. One of name or self_link must be provided. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.selfLink">self_link</a></code> | <code>str</code> | The URI of the created resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.zone">zone</a></code> | <code>str</code> | The zone of the instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_instance#id DataGoogleComputeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.name"></a>

- *Type:* str

The name of the instance. One of name or self_link must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_instance#name DataGoogleComputeInstance#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If self_link is provided, this value is ignored. If neither self_link nor project are provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_instance#project DataGoogleComputeInstance#project}

---

##### `self_link`<sup>Optional</sup> <a name="self_link" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.selfLink"></a>

- *Type:* str

The URI of the created resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_instance#self_link DataGoogleComputeInstance#self_link}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.zone"></a>

- *Type:* str

The zone of the instance.

If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_instance#zone DataGoogleComputeInstance#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetSelfLink">reset_self_link</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_self_link` <a name="reset_self_link" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetSelfLink"></a>

```python
def reset_self_link() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleComputeInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.isConstruct"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.isTerraformDataSource"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstance.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleComputeInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.advancedMachineFeatures">advanced_machine_features</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList">DataGoogleComputeInstanceAdvancedMachineFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.allowStoppingForUpdate">allow_stopping_for_update</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.attachedDisk">attached_disk</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList">DataGoogleComputeInstanceAttachedDiskList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.bootDisk">boot_disk</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList">DataGoogleComputeInstanceBootDiskList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.canIpForward">can_ip_forward</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.confidentialInstanceConfig">confidential_instance_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList">DataGoogleComputeInstanceConfidentialInstanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.cpuPlatform">cpu_platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.currentStatus">current_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.deletionProtection">deletion_protection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.desiredStatus">desired_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.enableDisplay">enable_display</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.eraseWindowsVssSignature">erase_windows_vss_signature</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.guestAccelerator">guest_accelerator</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList">DataGoogleComputeInstanceGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.instanceEncryptionKey">instance_encryption_key</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList">DataGoogleComputeInstanceInstanceEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.keyRevocationActionType">key_revocation_action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.metadata">metadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.metadataFingerprint">metadata_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.metadataStartupScript">metadata_startup_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.minCpuPlatform">min_cpu_platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList">DataGoogleComputeInstanceNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.networkPerformanceConfig">network_performance_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList">DataGoogleComputeInstanceNetworkPerformanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList">DataGoogleComputeInstanceParamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.partnerMetadata">partner_metadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList">DataGoogleComputeInstanceReservationAffinityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.scheduling">scheduling</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList">DataGoogleComputeInstanceSchedulingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.scratchDisk">scratch_disk</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList">DataGoogleComputeInstanceScratchDiskList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.serviceAccount">service_account</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList">DataGoogleComputeInstanceServiceAccountList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList">DataGoogleComputeInstanceShieldedInstanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.tagsFingerprint">tags_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.selfLinkInput">self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `advanced_machine_features`<sup>Required</sup> <a name="advanced_machine_features" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.advancedMachineFeatures"></a>

```python
advanced_machine_features: DataGoogleComputeInstanceAdvancedMachineFeaturesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList">DataGoogleComputeInstanceAdvancedMachineFeaturesList</a>

---

##### `allow_stopping_for_update`<sup>Required</sup> <a name="allow_stopping_for_update" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.allowStoppingForUpdate"></a>

```python
allow_stopping_for_update: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `attached_disk`<sup>Required</sup> <a name="attached_disk" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.attachedDisk"></a>

```python
attached_disk: DataGoogleComputeInstanceAttachedDiskList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList">DataGoogleComputeInstanceAttachedDiskList</a>

---

##### `boot_disk`<sup>Required</sup> <a name="boot_disk" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.bootDisk"></a>

```python
boot_disk: DataGoogleComputeInstanceBootDiskList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList">DataGoogleComputeInstanceBootDiskList</a>

---

##### `can_ip_forward`<sup>Required</sup> <a name="can_ip_forward" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.canIpForward"></a>

```python
can_ip_forward: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `confidential_instance_config`<sup>Required</sup> <a name="confidential_instance_config" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.confidentialInstanceConfig"></a>

```python
confidential_instance_config: DataGoogleComputeInstanceConfidentialInstanceConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList">DataGoogleComputeInstanceConfidentialInstanceConfigList</a>

---

##### `cpu_platform`<sup>Required</sup> <a name="cpu_platform" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.cpuPlatform"></a>

```python
cpu_platform: str
```

- *Type:* str

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `current_status`<sup>Required</sup> <a name="current_status" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.currentStatus"></a>

```python
current_status: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.deletionProtection"></a>

```python
deletion_protection: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `desired_status`<sup>Required</sup> <a name="desired_status" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.desiredStatus"></a>

```python
desired_status: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `enable_display`<sup>Required</sup> <a name="enable_display" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.enableDisplay"></a>

```python
enable_display: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `erase_windows_vss_signature`<sup>Required</sup> <a name="erase_windows_vss_signature" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.eraseWindowsVssSignature"></a>

```python
erase_windows_vss_signature: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `guest_accelerator`<sup>Required</sup> <a name="guest_accelerator" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.guestAccelerator"></a>

```python
guest_accelerator: DataGoogleComputeInstanceGuestAcceleratorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList">DataGoogleComputeInstanceGuestAcceleratorList</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `instance_encryption_key`<sup>Required</sup> <a name="instance_encryption_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.instanceEncryptionKey"></a>

```python
instance_encryption_key: DataGoogleComputeInstanceInstanceEncryptionKeyList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList">DataGoogleComputeInstanceInstanceEncryptionKeyList</a>

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `key_revocation_action_type`<sup>Required</sup> <a name="key_revocation_action_type" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.keyRevocationActionType"></a>

```python
key_revocation_action_type: str
```

- *Type:* str

---

##### `label_fingerprint`<sup>Required</sup> <a name="label_fingerprint" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.labelFingerprint"></a>

```python
label_fingerprint: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktn.StringMap

---

##### `metadata_fingerprint`<sup>Required</sup> <a name="metadata_fingerprint" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.metadataFingerprint"></a>

```python
metadata_fingerprint: str
```

- *Type:* str

---

##### `metadata_startup_script`<sup>Required</sup> <a name="metadata_startup_script" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.metadataStartupScript"></a>

```python
metadata_startup_script: str
```

- *Type:* str

---

##### `min_cpu_platform`<sup>Required</sup> <a name="min_cpu_platform" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.minCpuPlatform"></a>

```python
min_cpu_platform: str
```

- *Type:* str

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.networkInterface"></a>

```python
network_interface: DataGoogleComputeInstanceNetworkInterfaceList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList">DataGoogleComputeInstanceNetworkInterfaceList</a>

---

##### `network_performance_config`<sup>Required</sup> <a name="network_performance_config" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.networkPerformanceConfig"></a>

```python
network_performance_config: DataGoogleComputeInstanceNetworkPerformanceConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList">DataGoogleComputeInstanceNetworkPerformanceConfigList</a>

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.params"></a>

```python
params: DataGoogleComputeInstanceParamsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList">DataGoogleComputeInstanceParamsList</a>

---

##### `partner_metadata`<sup>Required</sup> <a name="partner_metadata" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.partnerMetadata"></a>

```python
partner_metadata: StringMap
```

- *Type:* cdktn.StringMap

---

##### `reservation_affinity`<sup>Required</sup> <a name="reservation_affinity" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.reservationAffinity"></a>

```python
reservation_affinity: DataGoogleComputeInstanceReservationAffinityList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList">DataGoogleComputeInstanceReservationAffinityList</a>

---

##### `resource_policies`<sup>Required</sup> <a name="resource_policies" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.resourcePolicies"></a>

```python
resource_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.scheduling"></a>

```python
scheduling: DataGoogleComputeInstanceSchedulingList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList">DataGoogleComputeInstanceSchedulingList</a>

---

##### `scratch_disk`<sup>Required</sup> <a name="scratch_disk" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.scratchDisk"></a>

```python
scratch_disk: DataGoogleComputeInstanceScratchDiskList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList">DataGoogleComputeInstanceScratchDiskList</a>

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.serviceAccount"></a>

```python
service_account: DataGoogleComputeInstanceServiceAccountList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList">DataGoogleComputeInstanceServiceAccountList</a>

---

##### `shielded_instance_config`<sup>Required</sup> <a name="shielded_instance_config" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: DataGoogleComputeInstanceShieldedInstanceConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList">DataGoogleComputeInstanceShieldedInstanceConfigList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_fingerprint`<sup>Required</sup> <a name="tags_fingerprint" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.tagsFingerprint"></a>

```python
tags_fingerprint: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `self_link_input`<sup>Optional</sup> <a name="self_link_input" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.selfLinkInput"></a>

```python
self_link_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeInstanceAdvancedMachineFeatures <a name="DataGoogleComputeInstanceAdvancedMachineFeatures" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeatures.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeatures()
```


### DataGoogleComputeInstanceAttachedDisk <a name="DataGoogleComputeInstanceAttachedDisk" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDisk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDisk.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDisk()
```


### DataGoogleComputeInstanceBootDisk <a name="DataGoogleComputeInstanceBootDisk" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDisk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDisk.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceBootDisk()
```


### DataGoogleComputeInstanceBootDiskInitializeParams <a name="DataGoogleComputeInstanceBootDiskInitializeParams" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParams.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParams()
```


### DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey <a name="DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey()
```


### DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey <a name="DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey()
```


### DataGoogleComputeInstanceConfidentialInstanceConfig <a name="DataGoogleComputeInstanceConfidentialInstanceConfig" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfig()
```


### DataGoogleComputeInstanceConfig <a name="DataGoogleComputeInstanceConfig" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceConfig(
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
  self_link: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_instance#id DataGoogleComputeInstance#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.name">name</a></code> | <code>str</code> | The name of the instance. One of name or self_link must be provided. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.selfLink">self_link</a></code> | <code>str</code> | The URI of the created resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.zone">zone</a></code> | <code>str</code> | The zone of the instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_instance#id DataGoogleComputeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the instance. One of name or self_link must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_instance#name DataGoogleComputeInstance#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If self_link is provided, this value is ignored. If neither self_link nor project are provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_instance#project DataGoogleComputeInstance#project}

---

##### `self_link`<sup>Optional</sup> <a name="self_link" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

The URI of the created resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_instance#self_link DataGoogleComputeInstance#self_link}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

The zone of the instance.

If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_compute_instance#zone DataGoogleComputeInstance#zone}

---

### DataGoogleComputeInstanceGuestAccelerator <a name="DataGoogleComputeInstanceGuestAccelerator" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAccelerator.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAccelerator()
```


### DataGoogleComputeInstanceInstanceEncryptionKey <a name="DataGoogleComputeInstanceInstanceEncryptionKey" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKey.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKey()
```


### DataGoogleComputeInstanceNetworkInterface <a name="DataGoogleComputeInstanceNetworkInterface" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterface.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterface()
```


### DataGoogleComputeInstanceNetworkInterfaceAccessConfig <a name="DataGoogleComputeInstanceNetworkInterfaceAccessConfig" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfig()
```


### DataGoogleComputeInstanceNetworkInterfaceAliasIpRange <a name="DataGoogleComputeInstanceNetworkInterfaceAliasIpRange" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRange.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRange()
```


### DataGoogleComputeInstanceNetworkInterfaceAliasIpv6Range <a name="DataGoogleComputeInstanceNetworkInterfaceAliasIpv6Range" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6Range"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6Range.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6Range()
```


### DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig <a name="DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig()
```


### DataGoogleComputeInstanceNetworkPerformanceConfig <a name="DataGoogleComputeInstanceNetworkPerformanceConfig" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfig()
```


### DataGoogleComputeInstanceParams <a name="DataGoogleComputeInstanceParams" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParams.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceParams()
```


### DataGoogleComputeInstanceReservationAffinity <a name="DataGoogleComputeInstanceReservationAffinity" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinity.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinity()
```


### DataGoogleComputeInstanceReservationAffinitySpecificReservation <a name="DataGoogleComputeInstanceReservationAffinitySpecificReservation" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservation.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservation()
```


### DataGoogleComputeInstanceScheduling <a name="DataGoogleComputeInstanceScheduling" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScheduling.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceScheduling()
```


### DataGoogleComputeInstanceSchedulingGracefulShutdown <a name="DataGoogleComputeInstanceSchedulingGracefulShutdown" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdown"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdown.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdown()
```


### DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration <a name="DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration()
```


### DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout <a name="DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout()
```


### DataGoogleComputeInstanceSchedulingMaxRunDuration <a name="DataGoogleComputeInstanceSchedulingMaxRunDuration" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDuration.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDuration()
```


### DataGoogleComputeInstanceSchedulingNodeAffinities <a name="DataGoogleComputeInstanceSchedulingNodeAffinities" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinities.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinities()
```


### DataGoogleComputeInstanceSchedulingOnInstanceStopAction <a name="DataGoogleComputeInstanceSchedulingOnInstanceStopAction" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopAction.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopAction()
```


### DataGoogleComputeInstanceSchedulingPreemptionNoticeDuration <a name="DataGoogleComputeInstanceSchedulingPreemptionNoticeDuration" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDuration.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDuration()
```


### DataGoogleComputeInstanceScratchDisk <a name="DataGoogleComputeInstanceScratchDisk" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDisk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDisk.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDisk()
```


### DataGoogleComputeInstanceServiceAccount <a name="DataGoogleComputeInstanceServiceAccount" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccount.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccount()
```


### DataGoogleComputeInstanceShieldedInstanceConfig <a name="DataGoogleComputeInstanceShieldedInstanceConfig" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeInstanceAdvancedMachineFeaturesList <a name="DataGoogleComputeInstanceAdvancedMachineFeaturesList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference <a name="DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">enable_nested_virtualization</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking">enable_uefi_networking</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit">performance_monitoring_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.turboMode">turbo_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">visible_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeatures">DataGoogleComputeInstanceAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_nested_virtualization`<sup>Required</sup> <a name="enable_nested_virtualization" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```python
enable_nested_virtualization: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_uefi_networking`<sup>Required</sup> <a name="enable_uefi_networking" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking"></a>

```python
enable_uefi_networking: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `performance_monitoring_unit`<sup>Required</sup> <a name="performance_monitoring_unit" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit"></a>

```python
performance_monitoring_unit: str
```

- *Type:* str

---

##### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `turbo_mode`<sup>Required</sup> <a name="turbo_mode" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.turboMode"></a>

```python
turbo_mode: str
```

- *Type:* str

---

##### `visible_core_count`<sup>Required</sup> <a name="visible_core_count" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```python
visible_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeatures">DataGoogleComputeInstanceAdvancedMachineFeatures</a>

---


### DataGoogleComputeInstanceAttachedDiskList <a name="DataGoogleComputeInstanceAttachedDiskList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceAttachedDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceAttachedDiskOutputReference <a name="DataGoogleComputeInstanceAttachedDiskOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeyRaw">disk_encryption_key_raw</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeyRsa">disk_encryption_key_rsa</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeySha256">disk_encryption_key_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionServiceAccount">disk_encryption_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.forceAttach">force_attach</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDisk">DataGoogleComputeInstanceAttachedDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `disk_encryption_key_raw`<sup>Required</sup> <a name="disk_encryption_key_raw" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeyRaw"></a>

```python
disk_encryption_key_raw: str
```

- *Type:* str

---

##### `disk_encryption_key_rsa`<sup>Required</sup> <a name="disk_encryption_key_rsa" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeyRsa"></a>

```python
disk_encryption_key_rsa: str
```

- *Type:* str

---

##### `disk_encryption_key_sha256`<sup>Required</sup> <a name="disk_encryption_key_sha256" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeySha256"></a>

```python
disk_encryption_key_sha256: str
```

- *Type:* str

---

##### `disk_encryption_service_account`<sup>Required</sup> <a name="disk_encryption_service_account" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionServiceAccount"></a>

```python
disk_encryption_service_account: str
```

- *Type:* str

---

##### `force_attach`<sup>Required</sup> <a name="force_attach" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.forceAttach"></a>

```python
force_attach: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceAttachedDisk
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDisk">DataGoogleComputeInstanceAttachedDisk</a>

---


### DataGoogleComputeInstanceBootDiskInitializeParamsList <a name="DataGoogleComputeInstanceBootDiskInitializeParamsList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference <a name="DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.enableConfidentialCompute">enable_confidential_compute</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedIops">provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedThroughput">provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.replicaZones">replica_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourceManagerTags">resource_manager_tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.snapshot">snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.sourceImageEncryptionKey">source_image_encryption_key</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList">DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList">DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.storagePool">storage_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParams">DataGoogleComputeInstanceBootDiskInitializeParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `enable_confidential_compute`<sup>Required</sup> <a name="enable_confidential_compute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.enableConfidentialCompute"></a>

```python
enable_confidential_compute: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `provisioned_iops`<sup>Required</sup> <a name="provisioned_iops" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedIops"></a>

```python
provisioned_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_throughput`<sup>Required</sup> <a name="provisioned_throughput" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedThroughput"></a>

```python
provisioned_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replica_zones`<sup>Required</sup> <a name="replica_zones" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.replicaZones"></a>

```python
replica_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_manager_tags`<sup>Required</sup> <a name="resource_manager_tags" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourceManagerTags"></a>

```python
resource_manager_tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `resource_policies`<sup>Required</sup> <a name="resource_policies" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourcePolicies"></a>

```python
resource_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.snapshot"></a>

```python
snapshot: str
```

- *Type:* str

---

##### `source_image_encryption_key`<sup>Required</sup> <a name="source_image_encryption_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.sourceImageEncryptionKey"></a>

```python
source_image_encryption_key: DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList">DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList</a>

---

##### `source_snapshot_encryption_key`<sup>Required</sup> <a name="source_snapshot_encryption_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.sourceSnapshotEncryptionKey"></a>

```python
source_snapshot_encryption_key: DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList">DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList</a>

---

##### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.storagePool"></a>

```python
storage_pool: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceBootDiskInitializeParams
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParams">DataGoogleComputeInstanceBootDiskInitializeParams</a>

---


### DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList <a name="DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference <a name="DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey">DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `rsa_encrypted_key`<sup>Required</sup> <a name="rsa_encrypted_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey">DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey</a>

---


### DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList <a name="DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference <a name="DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey">DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `rsa_encrypted_key`<sup>Required</sup> <a name="rsa_encrypted_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey">DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey</a>

---


### DataGoogleComputeInstanceBootDiskList <a name="DataGoogleComputeInstanceBootDiskList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceBootDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceBootDiskOutputReference <a name="DataGoogleComputeInstanceBootDiskOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.autoDelete">auto_delete</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeyRaw">disk_encryption_key_raw</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeyRsa">disk_encryption_key_rsa</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeySha256">disk_encryption_key_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionServiceAccount">disk_encryption_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.forceAttach">force_attach</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.guestOsFeatures">guest_os_features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.initializeParams">initialize_params</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList">DataGoogleComputeInstanceBootDiskInitializeParamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.interface">interface</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDisk">DataGoogleComputeInstanceBootDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_delete`<sup>Required</sup> <a name="auto_delete" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.autoDelete"></a>

```python
auto_delete: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `disk_encryption_key_raw`<sup>Required</sup> <a name="disk_encryption_key_raw" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeyRaw"></a>

```python
disk_encryption_key_raw: str
```

- *Type:* str

---

##### `disk_encryption_key_rsa`<sup>Required</sup> <a name="disk_encryption_key_rsa" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeyRsa"></a>

```python
disk_encryption_key_rsa: str
```

- *Type:* str

---

##### `disk_encryption_key_sha256`<sup>Required</sup> <a name="disk_encryption_key_sha256" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeySha256"></a>

```python
disk_encryption_key_sha256: str
```

- *Type:* str

---

##### `disk_encryption_service_account`<sup>Required</sup> <a name="disk_encryption_service_account" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionServiceAccount"></a>

```python
disk_encryption_service_account: str
```

- *Type:* str

---

##### `force_attach`<sup>Required</sup> <a name="force_attach" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.forceAttach"></a>

```python
force_attach: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `guest_os_features`<sup>Required</sup> <a name="guest_os_features" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.guestOsFeatures"></a>

```python
guest_os_features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `initialize_params`<sup>Required</sup> <a name="initialize_params" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.initializeParams"></a>

```python
initialize_params: DataGoogleComputeInstanceBootDiskInitializeParamsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList">DataGoogleComputeInstanceBootDiskInitializeParamsList</a>

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.interface"></a>

```python
interface: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceBootDisk
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDisk">DataGoogleComputeInstanceBootDisk</a>

---


### DataGoogleComputeInstanceConfidentialInstanceConfigList <a name="DataGoogleComputeInstanceConfidentialInstanceConfigList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference <a name="DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.confidentialInstanceType">confidential_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">enable_confidential_compute</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfig">DataGoogleComputeInstanceConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidential_instance_type`<sup>Required</sup> <a name="confidential_instance_type" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.confidentialInstanceType"></a>

```python
confidential_instance_type: str
```

- *Type:* str

---

##### `enable_confidential_compute`<sup>Required</sup> <a name="enable_confidential_compute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```python
enable_confidential_compute: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfig">DataGoogleComputeInstanceConfidentialInstanceConfig</a>

---


### DataGoogleComputeInstanceGuestAcceleratorList <a name="DataGoogleComputeInstanceGuestAcceleratorList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceGuestAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceGuestAcceleratorOutputReference <a name="DataGoogleComputeInstanceGuestAcceleratorOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAccelerator">DataGoogleComputeInstanceGuestAccelerator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceGuestAccelerator
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAccelerator">DataGoogleComputeInstanceGuestAccelerator</a>

---


### DataGoogleComputeInstanceInstanceEncryptionKeyList <a name="DataGoogleComputeInstanceInstanceEncryptionKeyList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference <a name="DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKey">DataGoogleComputeInstanceInstanceEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceInstanceEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKey">DataGoogleComputeInstanceInstanceEncryptionKey</a>

---


### DataGoogleComputeInstanceNetworkInterfaceAccessConfigList <a name="DataGoogleComputeInstanceNetworkInterfaceAccessConfigList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference <a name="DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.natIp">nat_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.networkTier">network_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">public_ptr_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.securityPolicy">security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfig">DataGoogleComputeInstanceNetworkInterfaceAccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nat_ip`<sup>Required</sup> <a name="nat_ip" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```python
nat_ip: str
```

- *Type:* str

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

---

##### `public_ptr_domain_name`<sup>Required</sup> <a name="public_ptr_domain_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```python
public_ptr_domain_name: str
```

- *Type:* str

---

##### `security_policy`<sup>Required</sup> <a name="security_policy" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceNetworkInterfaceAccessConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfig">DataGoogleComputeInstanceNetworkInterfaceAccessConfig</a>

---


### DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList <a name="DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference <a name="DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">subnetwork_range_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRange">DataGoogleComputeInstanceNetworkInterfaceAliasIpRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

---

##### `subnetwork_range_name`<sup>Required</sup> <a name="subnetwork_range_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```python
subnetwork_range_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceNetworkInterfaceAliasIpRange
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRange">DataGoogleComputeInstanceNetworkInterfaceAliasIpRange</a>

---


### DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList <a name="DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference <a name="DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.property.subnetworkRangeName">subnetwork_range_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6Range">DataGoogleComputeInstanceNetworkInterfaceAliasIpv6Range</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

---

##### `subnetwork_range_name`<sup>Required</sup> <a name="subnetwork_range_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.property.subnetworkRangeName"></a>

```python
subnetwork_range_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceNetworkInterfaceAliasIpv6Range
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6Range">DataGoogleComputeInstanceNetworkInterfaceAliasIpv6Range</a>

---


### DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList <a name="DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference <a name="DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">external_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">external_ipv6_prefix_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">network_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">public_ptr_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.securityPolicy">security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig">DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_ipv6`<sup>Required</sup> <a name="external_ipv6" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```python
external_ipv6: str
```

- *Type:* str

---

##### `external_ipv6_prefix_length`<sup>Required</sup> <a name="external_ipv6_prefix_length" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```python
external_ipv6_prefix_length: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

---

##### `public_ptr_domain_name`<sup>Required</sup> <a name="public_ptr_domain_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```python
public_ptr_domain_name: str
```

- *Type:* str

---

##### `security_policy`<sup>Required</sup> <a name="security_policy" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig">DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig</a>

---


### DataGoogleComputeInstanceNetworkInterfaceList <a name="DataGoogleComputeInstanceNetworkInterfaceList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceNetworkInterfaceOutputReference <a name="DataGoogleComputeInstanceNetworkInterfaceOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.accessConfig">access_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList">DataGoogleComputeInstanceNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.aliasIpRange">alias_ip_range</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList">DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.aliasIpv6Range">alias_ipv6_range</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList">DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.igmpQuery">igmp_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">internal_ipv6_prefix_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessConfig">ipv6_access_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList">DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessType">ipv6_access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.macAddress">mac_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.networkAttachment">network_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.networkIp">network_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.nicType">nic_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.parentNicName">parent_nic_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.queueCount">queue_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.securityPolicy">security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.stackType">stack_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetworkProject">subnetwork_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterface">DataGoogleComputeInstanceNetworkInterface</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_config`<sup>Required</sup> <a name="access_config" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.accessConfig"></a>

```python
access_config: DataGoogleComputeInstanceNetworkInterfaceAccessConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList">DataGoogleComputeInstanceNetworkInterfaceAccessConfigList</a>

---

##### `alias_ip_range`<sup>Required</sup> <a name="alias_ip_range" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```python
alias_ip_range: DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList">DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList</a>

---

##### `alias_ipv6_range`<sup>Required</sup> <a name="alias_ipv6_range" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.aliasIpv6Range"></a>

```python
alias_ipv6_range: DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList">DataGoogleComputeInstanceNetworkInterfaceAliasIpv6RangeList</a>

---

##### `igmp_query`<sup>Required</sup> <a name="igmp_query" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.igmpQuery"></a>

```python
igmp_query: str
```

- *Type:* str

---

##### `internal_ipv6_prefix_length`<sup>Required</sup> <a name="internal_ipv6_prefix_length" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```python
internal_ipv6_prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_access_config`<sup>Required</sup> <a name="ipv6_access_config" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```python
ipv6_access_config: DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList">DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList</a>

---

##### `ipv6_access_type`<sup>Required</sup> <a name="ipv6_access_type" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```python
ipv6_access_type: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `mac_address`<sup>Required</sup> <a name="mac_address" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

---

##### `network_ip`<sup>Required</sup> <a name="network_ip" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.networkIp"></a>

```python
network_ip: str
```

- *Type:* str

---

##### `nic_type`<sup>Required</sup> <a name="nic_type" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.nicType"></a>

```python
nic_type: str
```

- *Type:* str

---

##### `parent_nic_name`<sup>Required</sup> <a name="parent_nic_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.parentNicName"></a>

```python
parent_nic_name: str
```

- *Type:* str

---

##### `queue_count`<sup>Required</sup> <a name="queue_count" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.queueCount"></a>

```python
queue_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_policy`<sup>Required</sup> <a name="security_policy" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

---

##### `stack_type`<sup>Required</sup> <a name="stack_type" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.stackType"></a>

```python
stack_type: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `subnetwork_project`<sup>Required</sup> <a name="subnetwork_project" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```python
subnetwork_project: str
```

- *Type:* str

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceNetworkInterface
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterface">DataGoogleComputeInstanceNetworkInterface</a>

---


### DataGoogleComputeInstanceNetworkPerformanceConfigList <a name="DataGoogleComputeInstanceNetworkPerformanceConfigList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference <a name="DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">total_egress_bandwidth_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfig">DataGoogleComputeInstanceNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `total_egress_bandwidth_tier`<sup>Required</sup> <a name="total_egress_bandwidth_tier" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```python
total_egress_bandwidth_tier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceNetworkPerformanceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfig">DataGoogleComputeInstanceNetworkPerformanceConfig</a>

---


### DataGoogleComputeInstanceParamsList <a name="DataGoogleComputeInstanceParamsList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceParamsOutputReference <a name="DataGoogleComputeInstanceParamsOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.property.resourceManagerTags">resource_manager_tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParams">DataGoogleComputeInstanceParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_manager_tags`<sup>Required</sup> <a name="resource_manager_tags" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.property.resourceManagerTags"></a>

```python
resource_manager_tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceParams
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParams">DataGoogleComputeInstanceParams</a>

---


### DataGoogleComputeInstanceReservationAffinityList <a name="DataGoogleComputeInstanceReservationAffinityList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceReservationAffinityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceReservationAffinityOutputReference <a name="DataGoogleComputeInstanceReservationAffinityOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.specificReservation">specific_reservation</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList">DataGoogleComputeInstanceReservationAffinitySpecificReservationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinity">DataGoogleComputeInstanceReservationAffinity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `specific_reservation`<sup>Required</sup> <a name="specific_reservation" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.specificReservation"></a>

```python
specific_reservation: DataGoogleComputeInstanceReservationAffinitySpecificReservationList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList">DataGoogleComputeInstanceReservationAffinitySpecificReservationList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceReservationAffinity
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinity">DataGoogleComputeInstanceReservationAffinity</a>

---


### DataGoogleComputeInstanceReservationAffinitySpecificReservationList <a name="DataGoogleComputeInstanceReservationAffinitySpecificReservationList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference <a name="DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservation">DataGoogleComputeInstanceReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceReservationAffinitySpecificReservation
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservation">DataGoogleComputeInstanceReservationAffinitySpecificReservation</a>

---


### DataGoogleComputeInstanceSchedulingGracefulShutdownList <a name="DataGoogleComputeInstanceSchedulingGracefulShutdownList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList <a name="DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference <a name="DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration">DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration">DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration</a>

---


### DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference <a name="DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.maxDuration">max_duration</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList">DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdown">DataGoogleComputeInstanceSchedulingGracefulShutdown</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `max_duration`<sup>Required</sup> <a name="max_duration" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.maxDuration"></a>

```python
max_duration: DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList">DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceSchedulingGracefulShutdown
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdown">DataGoogleComputeInstanceSchedulingGracefulShutdown</a>

---


### DataGoogleComputeInstanceSchedulingList <a name="DataGoogleComputeInstanceSchedulingList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceSchedulingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList <a name="DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout">DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout">DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout</a>

---


### DataGoogleComputeInstanceSchedulingMaxRunDurationList <a name="DataGoogleComputeInstanceSchedulingMaxRunDurationList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference <a name="DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDuration">DataGoogleComputeInstanceSchedulingMaxRunDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceSchedulingMaxRunDuration
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDuration">DataGoogleComputeInstanceSchedulingMaxRunDuration</a>

---


### DataGoogleComputeInstanceSchedulingNodeAffinitiesList <a name="DataGoogleComputeInstanceSchedulingNodeAffinitiesList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference <a name="DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinities">DataGoogleComputeInstanceSchedulingNodeAffinities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceSchedulingNodeAffinities
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinities">DataGoogleComputeInstanceSchedulingNodeAffinities</a>

---


### DataGoogleComputeInstanceSchedulingOnInstanceStopActionList <a name="DataGoogleComputeInstanceSchedulingOnInstanceStopActionList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference <a name="DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd">discard_local_ssd</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopAction">DataGoogleComputeInstanceSchedulingOnInstanceStopAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `discard_local_ssd`<sup>Required</sup> <a name="discard_local_ssd" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd"></a>

```python
discard_local_ssd: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceSchedulingOnInstanceStopAction
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopAction">DataGoogleComputeInstanceSchedulingOnInstanceStopAction</a>

---


### DataGoogleComputeInstanceSchedulingOutputReference <a name="DataGoogleComputeInstanceSchedulingOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.automaticRestart">automatic_restart</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.gracefulShutdown">graceful_shutdown</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList">DataGoogleComputeInstanceSchedulingGracefulShutdownList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.hostErrorTimeoutSeconds">host_error_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.instanceTerminationAction">instance_termination_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.localSsdRecoveryTimeout">local_ssd_recovery_timeout</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList">DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.maintenanceInterval">maintenance_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.maxRunDuration">max_run_duration</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList">DataGoogleComputeInstanceSchedulingMaxRunDurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.minNodeCpus">min_node_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.nodeAffinities">node_affinities</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList">DataGoogleComputeInstanceSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.onHostMaintenance">on_host_maintenance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.onInstanceStopAction">on_instance_stop_action</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList">DataGoogleComputeInstanceSchedulingOnInstanceStopActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.preemptible">preemptible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.preemptionNoticeDuration">preemption_notice_duration</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList">DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.provisioningModel">provisioning_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.skipGuestOsShutdown">skip_guest_os_shutdown</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.terminationTime">termination_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScheduling">DataGoogleComputeInstanceScheduling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automatic_restart`<sup>Required</sup> <a name="automatic_restart" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.automaticRestart"></a>

```python
automatic_restart: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.availabilityDomain"></a>

```python
availability_domain: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `graceful_shutdown`<sup>Required</sup> <a name="graceful_shutdown" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.gracefulShutdown"></a>

```python
graceful_shutdown: DataGoogleComputeInstanceSchedulingGracefulShutdownList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList">DataGoogleComputeInstanceSchedulingGracefulShutdownList</a>

---

##### `host_error_timeout_seconds`<sup>Required</sup> <a name="host_error_timeout_seconds" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.hostErrorTimeoutSeconds"></a>

```python
host_error_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_termination_action`<sup>Required</sup> <a name="instance_termination_action" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.instanceTerminationAction"></a>

```python
instance_termination_action: str
```

- *Type:* str

---

##### `local_ssd_recovery_timeout`<sup>Required</sup> <a name="local_ssd_recovery_timeout" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```python
local_ssd_recovery_timeout: DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList">DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList</a>

---

##### `maintenance_interval`<sup>Required</sup> <a name="maintenance_interval" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.maintenanceInterval"></a>

```python
maintenance_interval: str
```

- *Type:* str

---

##### `max_run_duration`<sup>Required</sup> <a name="max_run_duration" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.maxRunDuration"></a>

```python
max_run_duration: DataGoogleComputeInstanceSchedulingMaxRunDurationList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList">DataGoogleComputeInstanceSchedulingMaxRunDurationList</a>

---

##### `min_node_cpus`<sup>Required</sup> <a name="min_node_cpus" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.minNodeCpus"></a>

```python
min_node_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_affinities`<sup>Required</sup> <a name="node_affinities" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.nodeAffinities"></a>

```python
node_affinities: DataGoogleComputeInstanceSchedulingNodeAffinitiesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList">DataGoogleComputeInstanceSchedulingNodeAffinitiesList</a>

---

##### `on_host_maintenance`<sup>Required</sup> <a name="on_host_maintenance" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.onHostMaintenance"></a>

```python
on_host_maintenance: str
```

- *Type:* str

---

##### `on_instance_stop_action`<sup>Required</sup> <a name="on_instance_stop_action" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.onInstanceStopAction"></a>

```python
on_instance_stop_action: DataGoogleComputeInstanceSchedulingOnInstanceStopActionList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList">DataGoogleComputeInstanceSchedulingOnInstanceStopActionList</a>

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.preemptible"></a>

```python
preemptible: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `preemption_notice_duration`<sup>Required</sup> <a name="preemption_notice_duration" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.preemptionNoticeDuration"></a>

```python
preemption_notice_duration: DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList">DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList</a>

---

##### `provisioning_model`<sup>Required</sup> <a name="provisioning_model" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.provisioningModel"></a>

```python
provisioning_model: str
```

- *Type:* str

---

##### `skip_guest_os_shutdown`<sup>Required</sup> <a name="skip_guest_os_shutdown" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.skipGuestOsShutdown"></a>

```python
skip_guest_os_shutdown: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `termination_time`<sup>Required</sup> <a name="termination_time" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.terminationTime"></a>

```python
termination_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceScheduling
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScheduling">DataGoogleComputeInstanceScheduling</a>

---


### DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList <a name="DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference <a name="DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDuration">DataGoogleComputeInstanceSchedulingPreemptionNoticeDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDurationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceSchedulingPreemptionNoticeDuration
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingPreemptionNoticeDuration">DataGoogleComputeInstanceSchedulingPreemptionNoticeDuration</a>

---


### DataGoogleComputeInstanceScratchDiskList <a name="DataGoogleComputeInstanceScratchDiskList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceScratchDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceScratchDiskOutputReference <a name="DataGoogleComputeInstanceScratchDiskOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.interface">interface</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDisk">DataGoogleComputeInstanceScratchDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.interface"></a>

```python
interface: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceScratchDisk
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDisk">DataGoogleComputeInstanceScratchDisk</a>

---


### DataGoogleComputeInstanceServiceAccountList <a name="DataGoogleComputeInstanceServiceAccountList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceServiceAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceServiceAccountOutputReference <a name="DataGoogleComputeInstanceServiceAccountOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccount">DataGoogleComputeInstanceServiceAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceServiceAccount
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccount">DataGoogleComputeInstanceServiceAccount</a>

---


### DataGoogleComputeInstanceShieldedInstanceConfigList <a name="DataGoogleComputeInstanceShieldedInstanceConfigList" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeInstanceShieldedInstanceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeInstanceShieldedInstanceConfigOutputReference <a name="DataGoogleComputeInstanceShieldedInstanceConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_compute_instance

dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableVtpm">enable_vtpm</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfig">DataGoogleComputeInstanceShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_integrity_monitoring`<sup>Required</sup> <a name="enable_integrity_monitoring" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_vtpm`<sup>Required</sup> <a name="enable_vtpm" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```python
enable_vtpm: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeInstanceShieldedInstanceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfig">DataGoogleComputeInstanceShieldedInstanceConfig</a>

---



