# `dataGoogleSqlDatabaseInstance` Submodule <a name="`dataGoogleSqlDatabaseInstance` Submodule" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSqlDatabaseInstance <a name="DataGoogleSqlDatabaseInstance" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_sql_database_instance google_sql_database_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the instance. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_sql_database_instance#id DataGoogleSqlDatabaseInstance#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.name"></a>

- *Type:* str

The name of the instance.

If the name is left blank, Terraform will randomly generate one when the instance is first created. This is done because after a name is used, it cannot be reused for up to one week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_sql_database_instance#name DataGoogleSqlDatabaseInstance#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_sql_database_instance#id DataGoogleSqlDatabaseInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_sql_database_instance#project DataGoogleSqlDatabaseInstance#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleSqlDatabaseInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isConstruct"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformDataSource"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleSqlDatabaseInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleSqlDatabaseInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleSqlDatabaseInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_sql_database_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleSqlDatabaseInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.availableMaintenanceVersions">available_maintenance_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.backupdrBackup">backupdr_backup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.clone">clone</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList">DataGoogleSqlDatabaseInstanceCloneList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.deletionProtection">deletion_protection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.dnsNames">dns_names</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList">DataGoogleSqlDatabaseInstanceDnsNamesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.encryptionKeyName">encryption_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.finalBackupDescription">final_backup_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.firstIpAddress">first_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.ipAddress">ip_address</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList">DataGoogleSqlDatabaseInstanceIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.maintenanceVersion">maintenance_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.masterInstanceName">master_instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.pointInTimeRestoreContext">point_in_time_restore_context</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList">DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.pscServiceAttachmentLink">psc_service_attachment_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.publicIpAddress">public_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.replicaConfiguration">replica_configuration</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList">DataGoogleSqlDatabaseInstanceReplicaConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.replicaNames">replica_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.replicationCluster">replication_cluster</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList">DataGoogleSqlDatabaseInstanceReplicationClusterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.restoreBackupContext">restore_backup_context</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList">DataGoogleSqlDatabaseInstanceRestoreBackupContextList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.rootPassword">root_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.rootPasswordWo">root_password_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.rootPasswordWoVersion">root_password_wo_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.serverCaCert">server_ca_cert</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList">DataGoogleSqlDatabaseInstanceServerCaCertList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.serviceAccountEmailAddress">service_account_email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList">DataGoogleSqlDatabaseInstanceSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `available_maintenance_versions`<sup>Required</sup> <a name="available_maintenance_versions" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.availableMaintenanceVersions"></a>

```python
available_maintenance_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backupdr_backup`<sup>Required</sup> <a name="backupdr_backup" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.backupdrBackup"></a>

```python
backupdr_backup: str
```

- *Type:* str

---

##### `clone`<sup>Required</sup> <a name="clone" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.clone"></a>

```python
clone: DataGoogleSqlDatabaseInstanceCloneList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList">DataGoogleSqlDatabaseInstanceCloneList</a>

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.deletionProtection"></a>

```python
deletion_protection: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `dns_names`<sup>Required</sup> <a name="dns_names" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.dnsNames"></a>

```python
dns_names: DataGoogleSqlDatabaseInstanceDnsNamesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList">DataGoogleSqlDatabaseInstanceDnsNamesList</a>

---

##### `encryption_key_name`<sup>Required</sup> <a name="encryption_key_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.encryptionKeyName"></a>

```python
encryption_key_name: str
```

- *Type:* str

---

##### `final_backup_description`<sup>Required</sup> <a name="final_backup_description" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.finalBackupDescription"></a>

```python
final_backup_description: str
```

- *Type:* str

---

##### `first_ip_address`<sup>Required</sup> <a name="first_ip_address" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.firstIpAddress"></a>

```python
first_ip_address: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.ipAddress"></a>

```python
ip_address: DataGoogleSqlDatabaseInstanceIpAddressList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList">DataGoogleSqlDatabaseInstanceIpAddressList</a>

---

##### `maintenance_version`<sup>Required</sup> <a name="maintenance_version" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.maintenanceVersion"></a>

```python
maintenance_version: str
```

- *Type:* str

---

##### `master_instance_name`<sup>Required</sup> <a name="master_instance_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.masterInstanceName"></a>

```python
master_instance_name: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `point_in_time_restore_context`<sup>Required</sup> <a name="point_in_time_restore_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.pointInTimeRestoreContext"></a>

```python
point_in_time_restore_context: DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList">DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList</a>

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `psc_service_attachment_link`<sup>Required</sup> <a name="psc_service_attachment_link" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.pscServiceAttachmentLink"></a>

```python
psc_service_attachment_link: str
```

- *Type:* str

---

##### `public_ip_address`<sup>Required</sup> <a name="public_ip_address" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.publicIpAddress"></a>

```python
public_ip_address: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `replica_configuration`<sup>Required</sup> <a name="replica_configuration" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.replicaConfiguration"></a>

```python
replica_configuration: DataGoogleSqlDatabaseInstanceReplicaConfigurationList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList">DataGoogleSqlDatabaseInstanceReplicaConfigurationList</a>

---

##### `replica_names`<sup>Required</sup> <a name="replica_names" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.replicaNames"></a>

```python
replica_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replication_cluster`<sup>Required</sup> <a name="replication_cluster" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.replicationCluster"></a>

```python
replication_cluster: DataGoogleSqlDatabaseInstanceReplicationClusterList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList">DataGoogleSqlDatabaseInstanceReplicationClusterList</a>

---

##### `restore_backup_context`<sup>Required</sup> <a name="restore_backup_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.restoreBackupContext"></a>

```python
restore_backup_context: DataGoogleSqlDatabaseInstanceRestoreBackupContextList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList">DataGoogleSqlDatabaseInstanceRestoreBackupContextList</a>

---

##### `root_password`<sup>Required</sup> <a name="root_password" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.rootPassword"></a>

```python
root_password: str
```

- *Type:* str

---

##### `root_password_wo`<sup>Required</sup> <a name="root_password_wo" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.rootPasswordWo"></a>

```python
root_password_wo: str
```

- *Type:* str

---

##### `root_password_wo_version`<sup>Required</sup> <a name="root_password_wo_version" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.rootPasswordWoVersion"></a>

```python
root_password_wo_version: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `server_ca_cert`<sup>Required</sup> <a name="server_ca_cert" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.serverCaCert"></a>

```python
server_ca_cert: DataGoogleSqlDatabaseInstanceServerCaCertList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList">DataGoogleSqlDatabaseInstanceServerCaCertList</a>

---

##### `service_account_email_address`<sup>Required</sup> <a name="service_account_email_address" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.serviceAccountEmailAddress"></a>

```python
service_account_email_address: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.settings"></a>

```python
settings: DataGoogleSqlDatabaseInstanceSettingsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList">DataGoogleSqlDatabaseInstanceSettingsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSqlDatabaseInstanceClone <a name="DataGoogleSqlDatabaseInstanceClone" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceClone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceClone.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceClone()
```


### DataGoogleSqlDatabaseInstanceConfig <a name="DataGoogleSqlDatabaseInstanceConfig" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.name">name</a></code> | <code>str</code> | The name of the instance. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_sql_database_instance#id DataGoogleSqlDatabaseInstance#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the instance.

If the name is left blank, Terraform will randomly generate one when the instance is first created. This is done because after a name is used, it cannot be reused for up to one week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_sql_database_instance#name DataGoogleSqlDatabaseInstance#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_sql_database_instance#id DataGoogleSqlDatabaseInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_sql_database_instance#project DataGoogleSqlDatabaseInstance#project}

---

### DataGoogleSqlDatabaseInstanceDnsNames <a name="DataGoogleSqlDatabaseInstanceDnsNames" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNames.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNames()
```


### DataGoogleSqlDatabaseInstanceIpAddress <a name="DataGoogleSqlDatabaseInstanceIpAddress" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddress.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddress()
```


### DataGoogleSqlDatabaseInstancePointInTimeRestoreContext <a name="DataGoogleSqlDatabaseInstancePointInTimeRestoreContext" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContext.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContext()
```


### DataGoogleSqlDatabaseInstanceReplicaConfiguration <a name="DataGoogleSqlDatabaseInstanceReplicaConfiguration" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfiguration.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfiguration()
```


### DataGoogleSqlDatabaseInstanceReplicationCluster <a name="DataGoogleSqlDatabaseInstanceReplicationCluster" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationCluster.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationCluster()
```


### DataGoogleSqlDatabaseInstanceRestoreBackupContext <a name="DataGoogleSqlDatabaseInstanceRestoreBackupContext" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContext.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContext()
```


### DataGoogleSqlDatabaseInstanceServerCaCert <a name="DataGoogleSqlDatabaseInstanceServerCaCert" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCert"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCert.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCert()
```


### DataGoogleSqlDatabaseInstanceSettings <a name="DataGoogleSqlDatabaseInstanceSettings" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettings()
```


### DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig <a name="DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig()
```


### DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures <a name="DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures()
```


### DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration <a name="DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration()
```


### DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings <a name="DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings()
```


### DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfig <a name="DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfig" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfig()
```


### DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlags <a name="DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlags" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlags.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlags()
```


### DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags <a name="DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags()
```


### DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig <a name="DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig()
```


### DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod <a name="DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod()
```


### DataGoogleSqlDatabaseInstanceSettingsEntraidConfig <a name="DataGoogleSqlDatabaseInstanceSettingsEntraidConfig" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfig()
```


### DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfig <a name="DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfig" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfig()
```


### DataGoogleSqlDatabaseInstanceSettingsInsightsConfig <a name="DataGoogleSqlDatabaseInstanceSettingsInsightsConfig" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfig()
```


### DataGoogleSqlDatabaseInstanceSettingsIpConfiguration <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfiguration" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfiguration.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfiguration()
```


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks()
```


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig()
```


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections()
```


### DataGoogleSqlDatabaseInstanceSettingsLocationPreference <a name="DataGoogleSqlDatabaseInstanceSettingsLocationPreference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreference()
```


### DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow <a name="DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow()
```


### DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy <a name="DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy()
```


### DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfig <a name="DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfig" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfig()
```


### DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetrics <a name="DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetrics" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetrics.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetrics()
```


### DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig <a name="DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSqlDatabaseInstanceCloneList <a name="DataGoogleSqlDatabaseInstanceCloneList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceCloneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceCloneOutputReference <a name="DataGoogleSqlDatabaseInstanceCloneOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.allocatedIpRange">allocated_ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.databaseNames">database_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.pointInTime">point_in_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.preferredZone">preferred_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.sourceInstanceDeletionTime">source_instance_deletion_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.sourceInstanceName">source_instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.sourceProject">source_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceClone">DataGoogleSqlDatabaseInstanceClone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocated_ip_range`<sup>Required</sup> <a name="allocated_ip_range" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.allocatedIpRange"></a>

```python
allocated_ip_range: str
```

- *Type:* str

---

##### `database_names`<sup>Required</sup> <a name="database_names" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.databaseNames"></a>

```python
database_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `point_in_time`<sup>Required</sup> <a name="point_in_time" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.pointInTime"></a>

```python
point_in_time: str
```

- *Type:* str

---

##### `preferred_zone`<sup>Required</sup> <a name="preferred_zone" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.preferredZone"></a>

```python
preferred_zone: str
```

- *Type:* str

---

##### `source_instance_deletion_time`<sup>Required</sup> <a name="source_instance_deletion_time" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.sourceInstanceDeletionTime"></a>

```python
source_instance_deletion_time: str
```

- *Type:* str

---

##### `source_instance_name`<sup>Required</sup> <a name="source_instance_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.sourceInstanceName"></a>

```python
source_instance_name: str
```

- *Type:* str

---

##### `source_project`<sup>Required</sup> <a name="source_project" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.sourceProject"></a>

```python
source_project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceClone
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceClone">DataGoogleSqlDatabaseInstanceClone</a>

---


### DataGoogleSqlDatabaseInstanceDnsNamesList <a name="DataGoogleSqlDatabaseInstanceDnsNamesList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceDnsNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceDnsNamesOutputReference <a name="DataGoogleSqlDatabaseInstanceDnsNamesOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.property.dnsScope">dns_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNames">DataGoogleSqlDatabaseInstanceDnsNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `dns_scope`<sup>Required</sup> <a name="dns_scope" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.property.dnsScope"></a>

```python
dns_scope: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNamesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceDnsNames
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceDnsNames">DataGoogleSqlDatabaseInstanceDnsNames</a>

---


### DataGoogleSqlDatabaseInstanceIpAddressList <a name="DataGoogleSqlDatabaseInstanceIpAddressList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceIpAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceIpAddressOutputReference <a name="DataGoogleSqlDatabaseInstanceIpAddressOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.timeToRetire">time_to_retire</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddress">DataGoogleSqlDatabaseInstanceIpAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `time_to_retire`<sup>Required</sup> <a name="time_to_retire" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.timeToRetire"></a>

```python
time_to_retire: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceIpAddress
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddress">DataGoogleSqlDatabaseInstanceIpAddress</a>

---


### DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList <a name="DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference <a name="DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.property.allocatedIpRange">allocated_ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.property.datasource">datasource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.property.pointInTime">point_in_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.property.preferredZone">preferred_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.property.targetInstance">target_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContext">DataGoogleSqlDatabaseInstancePointInTimeRestoreContext</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocated_ip_range`<sup>Required</sup> <a name="allocated_ip_range" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.property.allocatedIpRange"></a>

```python
allocated_ip_range: str
```

- *Type:* str

---

##### `datasource`<sup>Required</sup> <a name="datasource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.property.datasource"></a>

```python
datasource: str
```

- *Type:* str

---

##### `point_in_time`<sup>Required</sup> <a name="point_in_time" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.property.pointInTime"></a>

```python
point_in_time: str
```

- *Type:* str

---

##### `preferred_zone`<sup>Required</sup> <a name="preferred_zone" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.property.preferredZone"></a>

```python
preferred_zone: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `target_instance`<sup>Required</sup> <a name="target_instance" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.property.targetInstance"></a>

```python
target_instance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstancePointInTimeRestoreContext
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstancePointInTimeRestoreContext">DataGoogleSqlDatabaseInstancePointInTimeRestoreContext</a>

---


### DataGoogleSqlDatabaseInstanceReplicaConfigurationList <a name="DataGoogleSqlDatabaseInstanceReplicaConfigurationList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference <a name="DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificate">ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.cascadableReplica">cascadable_replica</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryInterval">connect_retry_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePath">dump_file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTarget">failover_target</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriod">master_heartbeat_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipher">ssl_cipher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificate">verify_server_certificate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfiguration">DataGoogleSqlDatabaseInstanceReplicaConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

---

##### `cascadable_replica`<sup>Required</sup> <a name="cascadable_replica" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.cascadableReplica"></a>

```python
cascadable_replica: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `connect_retry_interval`<sup>Required</sup> <a name="connect_retry_interval" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryInterval"></a>

```python
connect_retry_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dump_file_path`<sup>Required</sup> <a name="dump_file_path" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePath"></a>

```python
dump_file_path: str
```

- *Type:* str

---

##### `failover_target`<sup>Required</sup> <a name="failover_target" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTarget"></a>

```python
failover_target: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `master_heartbeat_period`<sup>Required</sup> <a name="master_heartbeat_period" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriod"></a>

```python
master_heartbeat_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssl_cipher`<sup>Required</sup> <a name="ssl_cipher" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipher"></a>

```python
ssl_cipher: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `verify_server_certificate`<sup>Required</sup> <a name="verify_server_certificate" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificate"></a>

```python
verify_server_certificate: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceReplicaConfiguration
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfiguration">DataGoogleSqlDatabaseInstanceReplicaConfiguration</a>

---


### DataGoogleSqlDatabaseInstanceReplicationClusterList <a name="DataGoogleSqlDatabaseInstanceReplicationClusterList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference <a name="DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.drReplica">dr_replica</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.failoverDrReplicaName">failover_dr_replica_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.psaWriteEndpoint">psa_write_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationCluster">DataGoogleSqlDatabaseInstanceReplicationCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dr_replica`<sup>Required</sup> <a name="dr_replica" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.drReplica"></a>

```python
dr_replica: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `failover_dr_replica_name`<sup>Required</sup> <a name="failover_dr_replica_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.failoverDrReplicaName"></a>

```python
failover_dr_replica_name: str
```

- *Type:* str

---

##### `psa_write_endpoint`<sup>Required</sup> <a name="psa_write_endpoint" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.psaWriteEndpoint"></a>

```python
psa_write_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceReplicationCluster
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicationCluster">DataGoogleSqlDatabaseInstanceReplicationCluster</a>

---


### DataGoogleSqlDatabaseInstanceRestoreBackupContextList <a name="DataGoogleSqlDatabaseInstanceRestoreBackupContextList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference <a name="DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunId">backup_run_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContext">DataGoogleSqlDatabaseInstanceRestoreBackupContext</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_run_id`<sup>Required</sup> <a name="backup_run_id" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunId"></a>

```python
backup_run_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceRestoreBackupContext
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContext">DataGoogleSqlDatabaseInstanceRestoreBackupContext</a>

---


### DataGoogleSqlDatabaseInstanceServerCaCertList <a name="DataGoogleSqlDatabaseInstanceServerCaCertList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceServerCaCertOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceServerCaCertOutputReference <a name="DataGoogleSqlDatabaseInstanceServerCaCertOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.cert">cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.expirationTime">expiration_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.sha1Fingerprint">sha1_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCert">DataGoogleSqlDatabaseInstanceServerCaCert</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.cert"></a>

```python
cert: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `expiration_time`<sup>Required</sup> <a name="expiration_time" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.expirationTime"></a>

```python
expiration_time: str
```

- *Type:* str

---

##### `sha1_fingerprint`<sup>Required</sup> <a name="sha1_fingerprint" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.sha1Fingerprint"></a>

```python
sha1_fingerprint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceServerCaCert
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCert">DataGoogleSqlDatabaseInstanceServerCaCert</a>

---


### DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList <a name="DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig">DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig">DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

---


### DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList <a name="DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures">DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures">DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures</a>

---


### DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList <a name="DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups">retained_backups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit">retention_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retained_backups`<sup>Required</sup> <a name="retained_backups" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups"></a>

```python
retained_backups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_unit`<sup>Required</sup> <a name="retention_unit" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit"></a>

```python
retention_unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

---


### DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList <a name="DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettings">backup_retention_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList">DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupTier">backup_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabled">binary_log_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled">point_in_time_recovery_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays">transaction_log_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration">DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_retention_settings`<sup>Required</sup> <a name="backup_retention_settings" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettings"></a>

```python
backup_retention_settings: DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList">DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList</a>

---

##### `backup_tier`<sup>Required</sup> <a name="backup_tier" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupTier"></a>

```python
backup_tier: str
```

- *Type:* str

---

##### `binary_log_enabled`<sup>Required</sup> <a name="binary_log_enabled" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabled"></a>

```python
binary_log_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `point_in_time_recovery_enabled`<sup>Required</sup> <a name="point_in_time_recovery_enabled" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled"></a>

```python
point_in_time_recovery_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `transaction_log_retention_days`<sup>Required</sup> <a name="transaction_log_retention_days" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays"></a>

```python
transaction_log_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration">DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration</a>

---


### DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList <a name="DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlags">DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlags
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlags">DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlags</a>

---


### DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList <a name="DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.connectionPoolingEnabled">connection_pooling_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.flags">flags</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList">DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfig">DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_pooling_enabled`<sup>Required</sup> <a name="connection_pooling_enabled" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.connectionPoolingEnabled"></a>

```python
connection_pooling_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.flags"></a>

```python
flags: DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList">DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfig">DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfig</a>

---


### DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList <a name="DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags">DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags">DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags</a>

---


### DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList <a name="DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabled">data_cache_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig">DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_cache_enabled`<sup>Required</sup> <a name="data_cache_enabled" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabled"></a>

```python
data_cache_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig">DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig</a>

---


### DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList <a name="DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod">DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod">DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

---


### DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList <a name="DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfig">DataGoogleSqlDatabaseInstanceSettingsEntraidConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsEntraidConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfig">DataGoogleSqlDatabaseInstanceSettingsEntraidConfig</a>

---


### DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList <a name="DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfig">DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfig">DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfig</a>

---


### DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList <a name="DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.enhancedQueryInsightsEnabled">enhanced_query_insights_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabled">query_insights_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinute">query_plans_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLength">query_string_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTags">record_application_tags</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddress">record_client_address</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfig">DataGoogleSqlDatabaseInstanceSettingsInsightsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enhanced_query_insights_enabled`<sup>Required</sup> <a name="enhanced_query_insights_enabled" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.enhancedQueryInsightsEnabled"></a>

```python
enhanced_query_insights_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `query_insights_enabled`<sup>Required</sup> <a name="query_insights_enabled" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabled"></a>

```python
query_insights_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `query_plans_per_minute`<sup>Required</sup> <a name="query_plans_per_minute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinute"></a>

```python
query_plans_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_string_length`<sup>Required</sup> <a name="query_string_length" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLength"></a>

```python
query_string_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `record_application_tags`<sup>Required</sup> <a name="record_application_tags" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTags"></a>

```python
record_application_tags: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `record_client_address`<sup>Required</sup> <a name="record_client_address" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddress"></a>

```python
record_client_address: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsInsightsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfig">DataGoogleSqlDatabaseInstanceSettingsInsightsConfig</a>

---


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime">expiration_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_time`<sup>Required</sup> <a name="expiration_time" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime"></a>

```python
expiration_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>

---


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRange">allocated_ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworks">authorized_networks</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.customSubjectAlternativeNames">custom_subject_alternative_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices">enable_private_path_for_google_cloud_services</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4Enabled">ipv4_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetwork">private_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfig">psc_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaMode">server_ca_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaPool">server_ca_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCertificateRotationMode">server_certificate_rotation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfiguration">DataGoogleSqlDatabaseInstanceSettingsIpConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocated_ip_range`<sup>Required</sup> <a name="allocated_ip_range" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRange"></a>

```python
allocated_ip_range: str
```

- *Type:* str

---

##### `authorized_networks`<sup>Required</sup> <a name="authorized_networks" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworks"></a>

```python
authorized_networks: DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList</a>

---

##### `custom_subject_alternative_names`<sup>Required</sup> <a name="custom_subject_alternative_names" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.customSubjectAlternativeNames"></a>

```python
custom_subject_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_private_path_for_google_cloud_services`<sup>Required</sup> <a name="enable_private_path_for_google_cloud_services" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices"></a>

```python
enable_private_path_for_google_cloud_services: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `ipv4_enabled`<sup>Required</sup> <a name="ipv4_enabled" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4Enabled"></a>

```python
ipv4_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `private_network`<sup>Required</sup> <a name="private_network" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetwork"></a>

```python
private_network: str
```

- *Type:* str

---

##### `psc_config`<sup>Required</sup> <a name="psc_config" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfig"></a>

```python
psc_config: DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList</a>

---

##### `server_ca_mode`<sup>Required</sup> <a name="server_ca_mode" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaMode"></a>

```python
server_ca_mode: str
```

- *Type:* str

---

##### `server_ca_pool`<sup>Required</sup> <a name="server_ca_pool" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaPool"></a>

```python
server_ca_pool: str
```

- *Type:* str

---

##### `server_certificate_rotation_mode`<sup>Required</sup> <a name="server_certificate_rotation_mode" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCertificateRotationMode"></a>

```python
server_certificate_rotation_mode: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsIpConfiguration
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfiguration">DataGoogleSqlDatabaseInstanceSettingsIpConfiguration</a>

---


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjects">allowed_consumer_projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.networkAttachmentUri">network_attachment_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscAutoConnections">psc_auto_connections</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabled">psc_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_consumer_projects`<sup>Required</sup> <a name="allowed_consumer_projects" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjects"></a>

```python
allowed_consumer_projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_attachment_uri`<sup>Required</sup> <a name="network_attachment_uri" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.networkAttachmentUri"></a>

```python
network_attachment_uri: str
```

- *Type:* str

---

##### `psc_auto_connections`<sup>Required</sup> <a name="psc_auto_connections" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscAutoConnections"></a>

```python
psc_auto_connections: DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList</a>

---

##### `psc_enabled`<sup>Required</sup> <a name="psc_enabled" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabled"></a>

```python
psc_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>

---


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerNetwork">consumer_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerNetworkStatus">consumer_network_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerServiceProjectId">consumer_service_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_network`<sup>Required</sup> <a name="consumer_network" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerNetwork"></a>

```python
consumer_network: str
```

- *Type:* str

---

##### `consumer_network_status`<sup>Required</sup> <a name="consumer_network_status" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerNetworkStatus"></a>

```python
consumer_network_status: str
```

- *Type:* str

---

##### `consumer_service_project_id`<sup>Required</sup> <a name="consumer_service_project_id" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerServiceProjectId"></a>

```python
consumer_service_project_id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections</a>

---


### DataGoogleSqlDatabaseInstanceSettingsList <a name="DataGoogleSqlDatabaseInstanceSettingsList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList <a name="DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplication">follow_gae_application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZone">secondary_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreference">DataGoogleSqlDatabaseInstanceSettingsLocationPreference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `follow_gae_application`<sup>Required</sup> <a name="follow_gae_application" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplication"></a>

```python
follow_gae_application: str
```

- *Type:* str

---

##### `secondary_zone`<sup>Required</sup> <a name="secondary_zone" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZone"></a>

```python
secondary_zone: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsLocationPreference
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreference">DataGoogleSqlDatabaseInstanceSettingsLocationPreference</a>

---


### DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList <a name="DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrack">update_track</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow">DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `update_track`<sup>Required</sup> <a name="update_track" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrack"></a>

```python
update_track: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow">DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow</a>

---


### DataGoogleSqlDatabaseInstanceSettingsOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.activationPolicy">activation_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfig">active_directory_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList">DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeatures">advanced_machine_features</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList">DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.autoUpgradeEnabled">auto_upgrade_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.availabilityType">availability_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.backupConfiguration">backup_configuration</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList">DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.collation">collation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.connectionPoolConfig">connection_pool_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList">DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcement">connector_enforcement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.dataApiAccess">data_api_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.databaseFlags">database_flags</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList">DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfig">data_cache_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList">DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.dataDiskProvisionedIops">data_disk_provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.dataDiskProvisionedThroughput">data_disk_provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriod">deny_maintenance_period</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList">DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresize">disk_autoresize</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimit">disk_autoresize_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskSize">disk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.effectiveAvailabilityType">effective_availability_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.enableDataplexIntegration">enable_dataplex_integration</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.enableGoogleMlIntegration">enable_google_ml_integration</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.entraidConfig">entraid_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList">DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.finalBackupConfig">final_backup_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList">DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.insightsConfig">insights_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList">DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.ipConfiguration">ip_configuration</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.locationPreference">location_preference</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList">DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList">DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicy">password_validation_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList">DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.pricingPlan">pricing_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.readPoolAutoScaleConfig">read_pool_auto_scale_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList">DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.retainBackupsOnDelete">retain_backups_on_delete</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfig">sql_server_audit_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList">DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.userLabels">user_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettings">DataGoogleSqlDatabaseInstanceSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `activation_policy`<sup>Required</sup> <a name="activation_policy" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.activationPolicy"></a>

```python
activation_policy: str
```

- *Type:* str

---

##### `active_directory_config`<sup>Required</sup> <a name="active_directory_config" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfig"></a>

```python
active_directory_config: DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList">DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList</a>

---

##### `advanced_machine_features`<sup>Required</sup> <a name="advanced_machine_features" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeatures"></a>

```python
advanced_machine_features: DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList">DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList</a>

---

##### `auto_upgrade_enabled`<sup>Required</sup> <a name="auto_upgrade_enabled" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.autoUpgradeEnabled"></a>

```python
auto_upgrade_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `availability_type`<sup>Required</sup> <a name="availability_type" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.availabilityType"></a>

```python
availability_type: str
```

- *Type:* str

---

##### `backup_configuration`<sup>Required</sup> <a name="backup_configuration" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.backupConfiguration"></a>

```python
backup_configuration: DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList">DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList</a>

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.collation"></a>

```python
collation: str
```

- *Type:* str

---

##### `connection_pool_config`<sup>Required</sup> <a name="connection_pool_config" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.connectionPoolConfig"></a>

```python
connection_pool_config: DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList">DataGoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList</a>

---

##### `connector_enforcement`<sup>Required</sup> <a name="connector_enforcement" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcement"></a>

```python
connector_enforcement: str
```

- *Type:* str

---

##### `data_api_access`<sup>Required</sup> <a name="data_api_access" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.dataApiAccess"></a>

```python
data_api_access: str
```

- *Type:* str

---

##### `database_flags`<sup>Required</sup> <a name="database_flags" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.databaseFlags"></a>

```python
database_flags: DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList">DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList</a>

---

##### `data_cache_config`<sup>Required</sup> <a name="data_cache_config" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfig"></a>

```python
data_cache_config: DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList">DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList</a>

---

##### `data_disk_provisioned_iops`<sup>Required</sup> <a name="data_disk_provisioned_iops" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.dataDiskProvisionedIops"></a>

```python
data_disk_provisioned_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_disk_provisioned_throughput`<sup>Required</sup> <a name="data_disk_provisioned_throughput" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.dataDiskProvisionedThroughput"></a>

```python
data_disk_provisioned_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deletion_protection_enabled`<sup>Required</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `deny_maintenance_period`<sup>Required</sup> <a name="deny_maintenance_period" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriod"></a>

```python
deny_maintenance_period: DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList">DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList</a>

---

##### `disk_autoresize`<sup>Required</sup> <a name="disk_autoresize" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresize"></a>

```python
disk_autoresize: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `disk_autoresize_limit`<sup>Required</sup> <a name="disk_autoresize_limit" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimit"></a>

```python
disk_autoresize_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_size`<sup>Required</sup> <a name="disk_size" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskSize"></a>

```python
disk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `effective_availability_type`<sup>Required</sup> <a name="effective_availability_type" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.effectiveAvailabilityType"></a>

```python
effective_availability_type: str
```

- *Type:* str

---

##### `enable_dataplex_integration`<sup>Required</sup> <a name="enable_dataplex_integration" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.enableDataplexIntegration"></a>

```python
enable_dataplex_integration: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_google_ml_integration`<sup>Required</sup> <a name="enable_google_ml_integration" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.enableGoogleMlIntegration"></a>

```python
enable_google_ml_integration: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `entraid_config`<sup>Required</sup> <a name="entraid_config" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.entraidConfig"></a>

```python
entraid_config: DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList">DataGoogleSqlDatabaseInstanceSettingsEntraidConfigList</a>

---

##### `final_backup_config`<sup>Required</sup> <a name="final_backup_config" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.finalBackupConfig"></a>

```python
final_backup_config: DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList">DataGoogleSqlDatabaseInstanceSettingsFinalBackupConfigList</a>

---

##### `insights_config`<sup>Required</sup> <a name="insights_config" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.insightsConfig"></a>

```python
insights_config: DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList">DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList</a>

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.ipConfiguration"></a>

```python
ip_configuration: DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList</a>

---

##### `location_preference`<sup>Required</sup> <a name="location_preference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.locationPreference"></a>

```python
location_preference: DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList">DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList</a>

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindow"></a>

```python
maintenance_window: DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList">DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList</a>

---

##### `password_validation_policy`<sup>Required</sup> <a name="password_validation_policy" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicy"></a>

```python
password_validation_policy: DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList">DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList</a>

---

##### `pricing_plan`<sup>Required</sup> <a name="pricing_plan" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.pricingPlan"></a>

```python
pricing_plan: str
```

- *Type:* str

---

##### `read_pool_auto_scale_config`<sup>Required</sup> <a name="read_pool_auto_scale_config" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.readPoolAutoScaleConfig"></a>

```python
read_pool_auto_scale_config: DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList">DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList</a>

---

##### `retain_backups_on_delete`<sup>Required</sup> <a name="retain_backups_on_delete" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.retainBackupsOnDelete"></a>

```python
retain_backups_on_delete: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `sql_server_audit_config`<sup>Required</sup> <a name="sql_server_audit_config" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfig"></a>

```python
sql_server_audit_config: DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList">DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList</a>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `user_labels`<sup>Required</sup> <a name="user_labels" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.userLabels"></a>

```python
user_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettings">DataGoogleSqlDatabaseInstanceSettings</a>

---


### DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList <a name="DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexity">complexity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring">disallow_username_substring</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy">enable_password_policy</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval">password_change_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseInterval">reuse_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy">DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `complexity`<sup>Required</sup> <a name="complexity" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexity"></a>

```python
complexity: str
```

- *Type:* str

---

##### `disallow_username_substring`<sup>Required</sup> <a name="disallow_username_substring" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring"></a>

```python
disallow_username_substring: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_password_policy`<sup>Required</sup> <a name="enable_password_policy" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy"></a>

```python
enable_password_policy: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `min_length`<sup>Required</sup> <a name="min_length" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_change_interval`<sup>Required</sup> <a name="password_change_interval" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval"></a>

```python
password_change_interval: str
```

- *Type:* str

---

##### `reuse_interval`<sup>Required</sup> <a name="reuse_interval" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseInterval"></a>

```python
reuse_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy">DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

---


### DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList <a name="DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.disableScaleIn">disable_scale_in</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.scaleInCooldownSeconds">scale_in_cooldown_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.scaleOutCooldownSeconds">scale_out_cooldown_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.targetMetrics">target_metrics</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList">DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfig">DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_scale_in`<sup>Required</sup> <a name="disable_scale_in" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.disableScaleIn"></a>

```python
disable_scale_in: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_in_cooldown_seconds`<sup>Required</sup> <a name="scale_in_cooldown_seconds" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.scaleInCooldownSeconds"></a>

```python
scale_in_cooldown_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_cooldown_seconds`<sup>Required</sup> <a name="scale_out_cooldown_seconds" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.scaleOutCooldownSeconds"></a>

```python
scale_out_cooldown_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_metrics`<sup>Required</sup> <a name="target_metrics" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.targetMetrics"></a>

```python
target_metrics: DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList">DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfig">DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfig</a>

---


### DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList <a name="DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetrics">DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `target_value`<sup>Required</sup> <a name="target_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetrics
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetrics">DataGoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetrics</a>

---


### DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList <a name="DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_sql_database_instance

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionInterval">retention_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadInterval">upload_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig">DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `retention_interval`<sup>Required</sup> <a name="retention_interval" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionInterval"></a>

```python
retention_interval: str
```

- *Type:* str

---

##### `upload_interval`<sup>Required</sup> <a name="upload_interval" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadInterval"></a>

```python
upload_interval: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig">DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

---



