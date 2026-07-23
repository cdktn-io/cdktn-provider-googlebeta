# `googleVertexAiModelGardenEnableModel` Submodule <a name="`googleVertexAiModelGardenEnableModel` Submodule" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiModelGardenEnableModel <a name="GoogleVertexAiModelGardenEnableModel" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model google_vertex_ai_model_garden_enable_model}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_garden_enable_model

googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  publisher_model_name: str,
  id: str = None,
  project: str = None,
  timeouts: GoogleVertexAiModelGardenEnableModelTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.publisherModelName">publisher_model_name</a></code> | <code>str</code> | The resource name of the Model Garden publisher model to enable. Format: 'publishers/{publisher}/models/{publisher_model}', optionally with a version suffix, for example 'publishers/google/models/paligemma@paligemma-224-float32'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model#id GoogleVertexAiModelGardenEnableModel#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model#project GoogleVertexAiModelGardenEnableModel#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts">GoogleVertexAiModelGardenEnableModelTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `publisher_model_name`<sup>Required</sup> <a name="publisher_model_name" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.publisherModelName"></a>

- *Type:* str

The resource name of the Model Garden publisher model to enable. Format: 'publishers/{publisher}/models/{publisher_model}', optionally with a version suffix, for example 'publishers/google/models/paligemma@paligemma-224-float32'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model#publisher_model_name GoogleVertexAiModelGardenEnableModel#publisher_model_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model#id GoogleVertexAiModelGardenEnableModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model#project GoogleVertexAiModelGardenEnableModel#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts">GoogleVertexAiModelGardenEnableModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model#timeouts GoogleVertexAiModelGardenEnableModel#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model#create GoogleVertexAiModelGardenEnableModel#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model#delete GoogleVertexAiModelGardenEnableModel#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVertexAiModelGardenEnableModel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_garden_enable_model

googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_garden_enable_model

googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_garden_enable_model

googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_garden_enable_model

googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVertexAiModelGardenEnableModel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiModelGardenEnableModel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiModelGardenEnableModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiModelGardenEnableModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.enablementState">enablement_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.publisherEndpoint">publisher_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference">GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.publisherModelNameInput">publisher_model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts">GoogleVertexAiModelGardenEnableModelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.publisherModelName">publisher_model_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

---

##### `publisher_endpoint`<sup>Required</sup> <a name="publisher_endpoint" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.publisherEndpoint"></a>

```python
publisher_endpoint: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.timeouts"></a>

```python
timeouts: GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference">GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `publisher_model_name_input`<sup>Optional</sup> <a name="publisher_model_name_input" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.publisherModelNameInput"></a>

```python
publisher_model_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVertexAiModelGardenEnableModelTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts">GoogleVertexAiModelGardenEnableModelTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `publisher_model_name`<sup>Required</sup> <a name="publisher_model_name" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.publisherModelName"></a>

```python
publisher_model_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiModelGardenEnableModelConfig <a name="GoogleVertexAiModelGardenEnableModelConfig" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_garden_enable_model

googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  publisher_model_name: str,
  id: str = None,
  project: str = None,
  timeouts: GoogleVertexAiModelGardenEnableModelTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.publisherModelName">publisher_model_name</a></code> | <code>str</code> | The resource name of the Model Garden publisher model to enable. Format: 'publishers/{publisher}/models/{publisher_model}', optionally with a version suffix, for example 'publishers/google/models/paligemma@paligemma-224-float32'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model#id GoogleVertexAiModelGardenEnableModel#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model#project GoogleVertexAiModelGardenEnableModel#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts">GoogleVertexAiModelGardenEnableModelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `publisher_model_name`<sup>Required</sup> <a name="publisher_model_name" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.publisherModelName"></a>

```python
publisher_model_name: str
```

- *Type:* str

The resource name of the Model Garden publisher model to enable. Format: 'publishers/{publisher}/models/{publisher_model}', optionally with a version suffix, for example 'publishers/google/models/paligemma@paligemma-224-float32'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model#publisher_model_name GoogleVertexAiModelGardenEnableModel#publisher_model_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model#id GoogleVertexAiModelGardenEnableModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model#project GoogleVertexAiModelGardenEnableModel#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiModelGardenEnableModelTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts">GoogleVertexAiModelGardenEnableModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model#timeouts GoogleVertexAiModelGardenEnableModel#timeouts}

---

### GoogleVertexAiModelGardenEnableModelTimeouts <a name="GoogleVertexAiModelGardenEnableModelTimeouts" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_garden_enable_model

googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model#create GoogleVertexAiModelGardenEnableModel#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model#delete GoogleVertexAiModelGardenEnableModel#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model#create GoogleVertexAiModelGardenEnableModel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vertex_ai_model_garden_enable_model#delete GoogleVertexAiModelGardenEnableModel#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference <a name="GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_model_garden_enable_model

googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts">GoogleVertexAiModelGardenEnableModelTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiModelGardenEnableModelTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts">GoogleVertexAiModelGardenEnableModelTimeouts</a>

---



