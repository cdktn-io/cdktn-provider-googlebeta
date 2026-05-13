# `googleDataLineageConfig` Submodule <a name="`googleDataLineageConfig` Submodule" id="@cdktn/provider-google-beta.googleDataLineageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataLineageConfig <a name="GoogleDataLineageConfig" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config google_data_lineage_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_config

googleDataLineageConfig.GoogleDataLineageConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ingestion: GoogleDataLineageConfigIngestion,
  location: str,
  parent: str,
  id: str = None,
  timeouts: GoogleDataLineageConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.ingestion">ingestion</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion">GoogleDataLineageConfigIngestion</a></code> | ingestion block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The region of the data lineage configuration for integration. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Parent scope for the config. Format: projects/{project-id\|project-number} or folders/{folder-number} or organizations/{organization-number}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#id GoogleDataLineageConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts">GoogleDataLineageConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ingestion`<sup>Required</sup> <a name="ingestion" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.ingestion"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion">GoogleDataLineageConfigIngestion</a>

ingestion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#ingestion GoogleDataLineageConfig#ingestion}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.location"></a>

- *Type:* str

The region of the data lineage configuration for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#location GoogleDataLineageConfig#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.parent"></a>

- *Type:* str

Parent scope for the config. Format: projects/{project-id|project-number} or folders/{folder-number} or organizations/{organization-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#parent GoogleDataLineageConfig#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#id GoogleDataLineageConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts">GoogleDataLineageConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#timeouts GoogleDataLineageConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.putIngestion">put_ingestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ingestion` <a name="put_ingestion" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.putIngestion"></a>

```python
def put_ingestion(
  rule: IResolvable | typing.List[GoogleDataLineageConfigIngestionRule]
) -> None
```

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.putIngestion.parameter.rule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule">GoogleDataLineageConfigIngestionRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#rule GoogleDataLineageConfig#rule}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#create GoogleDataLineageConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#delete GoogleDataLineageConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#update GoogleDataLineageConfig#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleDataLineageConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_config

googleDataLineageConfig.GoogleDataLineageConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_config

googleDataLineageConfig.GoogleDataLineageConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_config

googleDataLineageConfig.GoogleDataLineageConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_config

googleDataLineageConfig.GoogleDataLineageConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleDataLineageConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataLineageConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataLineageConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataLineageConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.ingestion">ingestion</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference">GoogleDataLineageConfigIngestionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference">GoogleDataLineageConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.ingestionInput">ingestion_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion">GoogleDataLineageConfigIngestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts">GoogleDataLineageConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `ingestion`<sup>Required</sup> <a name="ingestion" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.ingestion"></a>

```python
ingestion: GoogleDataLineageConfigIngestionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference">GoogleDataLineageConfigIngestionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.timeouts"></a>

```python
timeouts: GoogleDataLineageConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference">GoogleDataLineageConfigTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingestion_input`<sup>Optional</sup> <a name="ingestion_input" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.ingestionInput"></a>

```python
ingestion_input: GoogleDataLineageConfigIngestion
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion">GoogleDataLineageConfigIngestion</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleDataLineageConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts">GoogleDataLineageConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataLineageConfigConfig <a name="GoogleDataLineageConfigConfig" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_config

googleDataLineageConfig.GoogleDataLineageConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ingestion: GoogleDataLineageConfigIngestion,
  location: str,
  parent: str,
  id: str = None,
  timeouts: GoogleDataLineageConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.ingestion">ingestion</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion">GoogleDataLineageConfigIngestion</a></code> | ingestion block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.location">location</a></code> | <code>str</code> | The region of the data lineage configuration for integration. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.parent">parent</a></code> | <code>str</code> | Parent scope for the config. Format: projects/{project-id\|project-number} or folders/{folder-number} or organizations/{organization-number}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#id GoogleDataLineageConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts">GoogleDataLineageConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ingestion`<sup>Required</sup> <a name="ingestion" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.ingestion"></a>

```python
ingestion: GoogleDataLineageConfigIngestion
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion">GoogleDataLineageConfigIngestion</a>

ingestion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#ingestion GoogleDataLineageConfig#ingestion}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The region of the data lineage configuration for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#location GoogleDataLineageConfig#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Parent scope for the config. Format: projects/{project-id|project-number} or folders/{folder-number} or organizations/{organization-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#parent GoogleDataLineageConfig#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#id GoogleDataLineageConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleDataLineageConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts">GoogleDataLineageConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#timeouts GoogleDataLineageConfig#timeouts}

---

### GoogleDataLineageConfigIngestion <a name="GoogleDataLineageConfigIngestion" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_config

googleDataLineageConfig.GoogleDataLineageConfigIngestion(
  rule: IResolvable | typing.List[GoogleDataLineageConfigIngestionRule]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion.property.rule">rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule">GoogleDataLineageConfigIngestionRule</a>]</code> | rule block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion.property.rule"></a>

```python
rule: IResolvable | typing.List[GoogleDataLineageConfigIngestionRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule">GoogleDataLineageConfigIngestionRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#rule GoogleDataLineageConfig#rule}

---

### GoogleDataLineageConfigIngestionRule <a name="GoogleDataLineageConfigIngestionRule" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_config

googleDataLineageConfig.GoogleDataLineageConfigIngestionRule(
  integration_selector: GoogleDataLineageConfigIngestionRuleIntegrationSelector,
  lineage_enablement: GoogleDataLineageConfigIngestionRuleLineageEnablement
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule.property.integrationSelector">integration_selector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector">GoogleDataLineageConfigIngestionRuleIntegrationSelector</a></code> | integration_selector block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule.property.lineageEnablement">lineage_enablement</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement">GoogleDataLineageConfigIngestionRuleLineageEnablement</a></code> | lineage_enablement block. |

---

##### `integration_selector`<sup>Required</sup> <a name="integration_selector" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule.property.integrationSelector"></a>

```python
integration_selector: GoogleDataLineageConfigIngestionRuleIntegrationSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector">GoogleDataLineageConfigIngestionRuleIntegrationSelector</a>

integration_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#integration_selector GoogleDataLineageConfig#integration_selector}

---

##### `lineage_enablement`<sup>Required</sup> <a name="lineage_enablement" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule.property.lineageEnablement"></a>

```python
lineage_enablement: GoogleDataLineageConfigIngestionRuleLineageEnablement
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement">GoogleDataLineageConfigIngestionRuleLineageEnablement</a>

lineage_enablement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#lineage_enablement GoogleDataLineageConfig#lineage_enablement}

---

### GoogleDataLineageConfigIngestionRuleIntegrationSelector <a name="GoogleDataLineageConfigIngestionRuleIntegrationSelector" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_config

googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector(
  integration: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector.property.integration">integration</a></code> | <code>str</code> | Integration to which the rule applies. Possible values: ["DATAPROC", "LOOKER_CORE"]. |

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector.property.integration"></a>

```python
integration: str
```

- *Type:* str

Integration to which the rule applies. Possible values: ["DATAPROC", "LOOKER_CORE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#integration GoogleDataLineageConfig#integration}

---

### GoogleDataLineageConfigIngestionRuleLineageEnablement <a name="GoogleDataLineageConfigIngestionRuleLineageEnablement" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_config

googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement(
  enabled: bool | IResolvable
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether ingestion of lineage should be enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether ingestion of lineage should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#enabled GoogleDataLineageConfig#enabled}

---

### GoogleDataLineageConfigTimeouts <a name="GoogleDataLineageConfigTimeouts" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_config

googleDataLineageConfig.GoogleDataLineageConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#create GoogleDataLineageConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#delete GoogleDataLineageConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#update GoogleDataLineageConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#create GoogleDataLineageConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#delete GoogleDataLineageConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#update GoogleDataLineageConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataLineageConfigIngestionOutputReference <a name="GoogleDataLineageConfigIngestionOutputReference" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_config

googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.putRule">put_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule` <a name="put_rule" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.putRule"></a>

```python
def put_rule(
  value: IResolvable | typing.List[GoogleDataLineageConfigIngestionRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.putRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule">GoogleDataLineageConfigIngestionRule</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList">GoogleDataLineageConfigIngestionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.ruleInput">rule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule">GoogleDataLineageConfigIngestionRule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion">GoogleDataLineageConfigIngestion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.rule"></a>

```python
rule: GoogleDataLineageConfigIngestionRuleList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList">GoogleDataLineageConfigIngestionRuleList</a>

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.ruleInput"></a>

```python
rule_input: IResolvable | typing.List[GoogleDataLineageConfigIngestionRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule">GoogleDataLineageConfigIngestionRule</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataLineageConfigIngestion
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestion">GoogleDataLineageConfigIngestion</a>

---


### GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference <a name="GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_config

googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.integrationInput">integration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.integration">integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector">GoogleDataLineageConfigIngestionRuleIntegrationSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `integration_input`<sup>Optional</sup> <a name="integration_input" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.integrationInput"></a>

```python
integration_input: str
```

- *Type:* str

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.integration"></a>

```python
integration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataLineageConfigIngestionRuleIntegrationSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector">GoogleDataLineageConfigIngestionRuleIntegrationSelector</a>

---


### GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference <a name="GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_config

googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement">GoogleDataLineageConfigIngestionRuleLineageEnablement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataLineageConfigIngestionRuleLineageEnablement
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement">GoogleDataLineageConfigIngestionRuleLineageEnablement</a>

---


### GoogleDataLineageConfigIngestionRuleList <a name="GoogleDataLineageConfigIngestionRuleList" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_config

googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataLineageConfigIngestionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule">GoogleDataLineageConfigIngestionRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDataLineageConfigIngestionRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule">GoogleDataLineageConfigIngestionRule</a>]

---


### GoogleDataLineageConfigIngestionRuleOutputReference <a name="GoogleDataLineageConfigIngestionRuleOutputReference" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_config

googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.putIntegrationSelector">put_integration_selector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.putLineageEnablement">put_lineage_enablement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_integration_selector` <a name="put_integration_selector" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.putIntegrationSelector"></a>

```python
def put_integration_selector(
  integration: str
) -> None
```

###### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.putIntegrationSelector.parameter.integration"></a>

- *Type:* str

Integration to which the rule applies. Possible values: ["DATAPROC", "LOOKER_CORE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#integration GoogleDataLineageConfig#integration}

---

##### `put_lineage_enablement` <a name="put_lineage_enablement" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.putLineageEnablement"></a>

```python
def put_lineage_enablement(
  enabled: bool | IResolvable
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.putLineageEnablement.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether ingestion of lineage should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_data_lineage_config#enabled GoogleDataLineageConfig#enabled}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.integrationSelector">integration_selector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference">GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.lineageEnablement">lineage_enablement</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference">GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.integrationSelectorInput">integration_selector_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector">GoogleDataLineageConfigIngestionRuleIntegrationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.lineageEnablementInput">lineage_enablement_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement">GoogleDataLineageConfigIngestionRuleLineageEnablement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule">GoogleDataLineageConfigIngestionRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `integration_selector`<sup>Required</sup> <a name="integration_selector" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.integrationSelector"></a>

```python
integration_selector: GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference">GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference</a>

---

##### `lineage_enablement`<sup>Required</sup> <a name="lineage_enablement" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.lineageEnablement"></a>

```python
lineage_enablement: GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference">GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference</a>

---

##### `integration_selector_input`<sup>Optional</sup> <a name="integration_selector_input" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.integrationSelectorInput"></a>

```python
integration_selector_input: GoogleDataLineageConfigIngestionRuleIntegrationSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleIntegrationSelector">GoogleDataLineageConfigIngestionRuleIntegrationSelector</a>

---

##### `lineage_enablement_input`<sup>Optional</sup> <a name="lineage_enablement_input" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.lineageEnablementInput"></a>

```python
lineage_enablement_input: GoogleDataLineageConfigIngestionRuleLineageEnablement
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleLineageEnablement">GoogleDataLineageConfigIngestionRuleLineageEnablement</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDataLineageConfigIngestionRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigIngestionRule">GoogleDataLineageConfigIngestionRule</a>

---


### GoogleDataLineageConfigTimeoutsOutputReference <a name="GoogleDataLineageConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_config

googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts">GoogleDataLineageConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDataLineageConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageConfig.GoogleDataLineageConfigTimeouts">GoogleDataLineageConfigTimeouts</a>

---



